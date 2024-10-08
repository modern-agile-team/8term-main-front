import {
  AlignCenter,
  GridContainer,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';
import { Link } from 'react-router-dom';
export default function Quest() {
  return (
    <AlignCenter>
      <GridContainer>
        <LayOutDiv>
          <FeatureDiv $width="176px" $height="42px" $marginTop="50px">
            로고
          </FeatureDiv>
          {['', 'Ranking', 'quest', 'store', 'profile', 'setting'].map(
            (value, index) => (
              <FeatureDiv
                $width="176px"
                $height="42px"
                $marginTop="40px"
                key={index}
              >
                {value}
                <Link to={`/${value}`}>이동</Link>
              </FeatureDiv>
            )
          )}
        </LayOutDiv>
        <LayOutDiv>
          <FeatureDiv $width="666px" $height="381px" $marginTop="98px">
            오늘의 퀘스트 칸
          </FeatureDiv>
          <FeatureDiv $width="666px" $height="283px" $marginTop="24px">
            메인 퀘스트 칸
          </FeatureDiv>
        </LayOutDiv>
        <LayOutDiv>
          <FeatureDiv $width="294px" $height="42px" $marginTop="42px">
            생명력/프로필
          </FeatureDiv>
        </LayOutDiv>
      </GridContainer>
    </AlignCenter>
  );
}
