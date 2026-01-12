import { useRef } from "react";
import styled from "styled-components";
import { StripContent } from "../data/StripData";

const MovingStrip = () => {
  const track = useRef<HTMLDivElement | null>(null);
  const handleStrip = (value: number) => {
    if (!track.current) return;
    if (value === 1) return (track.current.style.animationPlayState = "paused");
    if (value === 2)
      return (track.current.style.animationPlayState = "running");
  };

  return (
    <StripWrapper>
      <div className="marquee">
        <div
          ref={track}
          onMouseEnter={() => handleStrip(1)}
          onMouseLeave={() => handleStrip(2)}
          className="track"
        >
          {StripContent &&
            StripContent.map((item) => (
              <span>
                <i>
                  {item.label}
                  {item.icon}
                </i>
              </span>
            ))}
        </div>
      </div>
    </StripWrapper>
  );
};

export default MovingStrip;

const StripWrapper = styled.div`
  .marquee {
    overflow: hidden;
    background: #111;
    padding: 14px 0;
  }

  .track {
    display: flex;
    animation: marquee 20s linear infinite;
  }

  .track span {
    margin-right: 50px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
  }
  i {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
  }

  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
