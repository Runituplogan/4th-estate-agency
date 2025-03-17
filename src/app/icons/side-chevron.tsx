export default function SideChevron({ variation = 'left' }) {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform={variation === 'right' ? 'rotate(180)' : ''}
      >
        <path
          d="M12.8337 6.88314H1.16699M1.16699 6.88314L7.00033 12.7165M1.16699 6.88314L7.00033 1.0498"
          stroke="#344054"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  