import * as C from "./GridItemStyles";
import thumbUp from "../../assets/thumb_up.svg";
import thumbDown from "../../assets/thumb_down.svg";
import { Level } from "../../helpers/imc";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <C.Main style={{ backgroundColor: item.color }}>
      <C.gridIcon>
        {item.icon === "up" && <img src={thumbUp} alt="" width="50" />}
        {item.icon === "down" && <img src={thumbDown} alt="" width="50" />}
      </C.gridIcon>
      <C.gridTitle>{item.title}</C.gridTitle>
      <C.gridInfo>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </C.gridInfo>
    </C.Main>
  );
};
