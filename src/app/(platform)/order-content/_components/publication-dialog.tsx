"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MediaPlacementResponse } from "@/interfaces/media-placement";
import {
  MapPin,
  TrendingUp,
  CalendarClock,
  Check,
  CircleQuestionMark,
  TriangleAlert,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import useCart from "@/hooks/useCart";
import { DISCLAIMER_STYLES } from "@/helper";

interface PublicationDialogProps {
  record: MediaPlacementResponse["records"][0] | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const contentTypes = [
  {
    id: "personal",
    label: "Personal Profile",
    price: "+$600",
    description:
      "Up to 1000 words chronicling your 'how I built this' story. Best fit for early-stage press, thought leadership, and building credibility.",
    productionTime: "10 Business Days",
  },
  {
    id: "marketing",
    label: "Marketing Blast",
    price: "+$400",
    description:
      "Up to 800 words on your next big campaign, product launch, or celebrity endorsement. Best fit for brands and agencies looking for an SEO boost.",
    productionTime: "10 Business Days",
  },
  {
    id: "self",
    label: "Self-Submitted Story",
    price: "+$0",
    description:
      "You write your own story (per our editorial guidelines) and the publisher's unique guidelines). If selected, we'll be hands off until you deliver your content.",
    productionTime: null,
  },
];

export function PublicationDialog({
  record,
  open,
  onOpenChange,
}: PublicationDialogProps) {
  const [selectedContent, setSelectedContent] = useState("personal");
  const [quantity, setQuantity] = useState(1);
  const { useAddToCartMutation } = useCart();
  const { mutate: addToCart, isPending } = useAddToCartMutation();

  if (!record) return null;

  const channel = record.channels?.[0];
  const basePrice = record.prices?.[0]?.unit_amount ?? 0;
  const selectedExtra =
    contentTypes.find((c) => c.id === selectedContent)?.price ?? "+$0";
  const extraAmount = parseInt(selectedExtra.replace(/[^0-9]/g, "")) || 0;
  const total = (basePrice + extraAmount) * quantity;

  const handleAddToCart = () => {
    const selectedType = contentTypes.find((c) => c.id === selectedContent);
    const contentTypeFee = parseInt(
      selectedType?.price.replace(/[^0-9]/g, "") || "0",
    );
    addToCart(
      {
        placementId: record.id,
        name: record.outlet_name,
        websiteUrl: record.website_url,
        logoUrl: record.logo ?? null,
        country: record.country ?? null,
        outletName: record.outlet_name,
        channelType: channel?.channel_type ?? null,
        placementType: channel?.placement_type ?? null,
        domainAuthority: channel?.domain_authority ?? null,
        domainRanking: channel?.domain_ranking ?? null,
        isDoFollow: channel?.is_do_follow ?? false,
        minDeliveryDays: record.min_delivery_days ?? null,
        maxDeliveryDays: record.max_delivery_days ?? null,
        unitAmount: basePrice,
        pricingTier: record.prices?.[0]?.pricing_tier ?? "basic",
        currency: record.prices?.[0]?.currency ?? "usd",
        quantity,
        contentType: selectedContent,
        contentTypeFee,
      },
      {
        onSuccess: () => onOpenChange(false),
      },
    );
  };

  function RequirementsBox({ requirements }: { requirements: string }) {
    const [expanded, setExpanded] = useState(false);

    return (
      <div className="rounded-lg border-2 border-[#fcd34d] p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <TriangleAlert size={25} className="text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-semibold text-red-700">
                The publication selected has restrictions:{" "}
              </span>
              <div
                onClick={() => setExpanded((p) => !p)}
                className={`cursor-pointer bg-amber-100 mt-2 text-sm text-yellow-800 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out rounded-sm px-3 ${
                  expanded ? "max-h-96" : "max-h-5"
                }`}
                dangerouslySetInnerHTML={{ __html: requirements }}
              />
            </div>
          </div>
          <button
            onClick={() => setExpanded((p) => !p)}
            className="shrink-0 text-red-700 transition-transform duration-300"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[95vw] rounded-3xl p-4 overflow-hidden max-h-[90vh] flex flex-col"
        style={{ maxWidth: "1200px" }}
      >
        <DialogHeader className="px-8 pt-8 pb-2 shrink-0">
          <DialogTitle className="text-2xl font-bold">
            Review Publication
          </DialogTitle>
          <DialogDescription className="text-[#737373] text-sm border-b">
            Please carefully review the restrictions before applying.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col md:flex-row items-start gap-0 overflow-y-auto">
          <div className="flex-1 w-full flex flex-col gap-5 px-1 py-6 min-w-0 md:px-6">
            <div className="flex items-center gap-3">
              <img
                src={record.logo}
                alt={record.outlet_name}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="font-semibold text-base">{record.outlet_name}</p>
                <a
                  href={record.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#737373] hover:underline break-all"
                >
                  {record.website_url}
                </a>
              </div>
            </div>

            {record.description && (
              <p
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: record.description }}
              />
            )}

            <h1 className="text-[#8b8b8b] font-bold tracking-wider">
              Publication Restrictions
            </h1>
            {record.requirements && (
              <RequirementsBox requirements={record.requirements} />
            )}
            {record.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {record.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 rounded-full border text-sm font-medium bg-white"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2 text-gray-600">
                <CalendarClock size={16} className="shrink-0 mt-0.5" />
                <span>
                  Est. Publishing Time
                  <br />
                  <span className="flex items-center gap-1 font-semibold text-black">
                    {record.min_delivery_days}-{record.max_delivery_days} days
                    <CircleQuestionMark color="#737373" size={16} />
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <TrendingUp size={16} className="shrink-0 mt-0.5" />
                <span>
                  Domain Authority:{" "}
                  <span className="font-semibold text-black">
                    {channel?.domain_authority ?? "N/A"}
                  </span>
                  <br />
                  Domain Ranking:{" "}
                  <span className="font-semibold text-black">
                    {channel?.domain_ranking ?? "N/A"}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  channel?.is_do_follow
                    ? "bg-green-100 text-green-700"
                    : "bg-[#FFF0EE] text-[#E05C3A]"
                }`}
              >
                {channel?.is_do_follow ? "Do Follow" : "No Follow"}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  DISCLAIMER_STYLES[channel?.disclaimer_name ?? "N/A"]
                }`}
              >
                {channel?.disclaimer_name ?? "N/A"}
              </span>
              {[record.city, record.state, record.country]
                .filter(Boolean)
                .join(", ") && (
                <span className="flex items-center gap-1 text-sm text-[#737373]">
                  <MapPin size={16} /> Location:
                  <strong className="text-black">
                    {[record.city, record.state, record.country]
                      .filter(Boolean)
                      .join(", ")}
                  </strong>
                </span>
              )}
            </div>

            <div>
              <p className="text-xs text-[#737373]">
                4E Agency is not affiliated with, endorsed by, or acting on
                behalf of {record.outlet_name}. We will act as your agent and
                procure this placement if the publisher approves of the content.
                If the publisher declines or fails to respond, the payment will
                be refunded in full.
              </p>
            </div>
          </div>

          <div className="w-full md:w-md shrink-0 border rounded-xl bg-white">
            <div className="p-6 flex flex-col gap-4">
              <p className="text-[19px] font-semibold">Media Placement</p>
              <p className="text-4xl font-bold">${basePrice}</p>
              <p className="text-sm text-[#737373]">
                Gets your headline in{" "}
                <span className="font-semibold text-black">
                  {record.outlet_name}
                </span>
                . Turnaround times vary based on the publication's guidelines.
              </p>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium">Choose your content</p>
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedContent(type.id)}
                    className={`w-full text-left rounded-xl border p-3 transition-all ${
                      selectedContent === type.id
                        ? "border-[#1B3C59] bg-[#f0f4f8]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            selectedContent === type.id
                              ? "border-[#1B3C59] bg-[#1B3C59]"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedContent === type.id && (
                            <Check size={10} className="text-white" />
                          )}
                        </div>
                        <span className="text-sm font-semibold">
                          {type.label}
                        </span>
                      </div>
                      <span className="text-sm font-bold">{type.price}</span>
                    </div>
                    <p className="text-xs text-black pl-6">
                      {type.description}
                    </p>
                    {type.productionTime && (
                      <p className="text-xs pl-6 mt-4 text-black flex gap-1">
                        Est. Production Time:{" "}
                        <span className="flex items-center gap-1 font-medium text-[#737373]">
                          {type.productionTime}
                          <CircleQuestionMark color="#737373" size={14} />
                        </span>
                      </p>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border rounded-xl mt-2">
                <div className="flex items-center justify-center sm:justify-start gap-3 border rounded-full px-4 py-2 w-full sm:w-auto">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-gray-500 font-bold hover:text-black"
                  >
                    -
                  </button>

                  <span className="text-sm font-semibold w-6 text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-gray-500 font-bold hover:text-black"
                  >
                    +
                  </button>
                </div>

                <span className="text-sm font-semibold text-gray-600 text-center sm:text-left">
                  Total: ${total}
                </span>

                <button
                  onClick={handleAddToCart}
                  disabled={isPending}
                  className="flex items-center justify-center gap-2 bg-[#1B3C59] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition w-full sm:w-auto"
                >
                  <Check size={14} />
                  {isPending ? "Adding..." : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
