import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info2.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>KFC</Typography>
        <Typography color={medium}>kfc.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        KFC was founded by Colonel Harland Sanders (1890–1980), an entrepreneur
        who began selling fried chicken from his roadside restaurant in Corbin,
        Kentucky, during the Great Depression
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
