import {useState} from "react";
import styled from "styled-components";

const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  height: fit-content;
  width: 100px;

  &.on {
    span {
      color: yellow;
    }
  }

  &.off {
    span {
      color: ${props => props.theme.whisper};
    }
  }

  span {
    font-size: 50px;
  }

`

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;

  .label {
    margin-left: 30px;
  }
`

const labels = {
  1: 'Useless',
  2: 'Useless+',
  3: 'Poor',
  4: 'Poor+',
  5: 'Ok',
  6: 'Ok+',
  7: 'Good',
  8: 'Good+',
  9: 'Excellent',
  10: 'Excellent+',
};

const StarRating = (props) => {
    const [hover, setHover] = useState(0);
    return (
        <StarRatingWrapper>
            {[...Array(10)].map((star, index) => {
                index += 1;
                return (
                    <StarButton
                        type="button"
                        key={index}
                        style={{
                            display: "flex",
                            width: "20px",
                            overflow: "hidden",
                            direction: (index % 2 !== 0) ? "ltr" : "rtl",
                            marginBottom: "10px"
                        }}
                        className={index <= (hover || props.passRating) ? "on" : "off"}
                        onClick={() => props.passSetRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(props.passRating)}
                    >
                        <span className="star">&#9733;</span>
                    </StarButton>
                );
            })}
            <p className={"label"}>{labels[hover]}
            </p>
        </StarRatingWrapper>
    );
};

export default StarRating
