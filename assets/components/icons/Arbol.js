import React from "react";
import { View } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Svg, { Path } from "react-native-svg";

export default ({
                  style = {},
                  width = responsiveWidth(15),
                  height = responsiveWidth(10),
                }) => {
  return (
    <View style={style}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M38.5548 38.7532L38.5537 38.7542C36.7931 40.4691 34.3796 41.3067 32.3468 41.5264C31.8198 41.5834 31.2755 41.604 30.7326 41.577V55.5815H17.6457V41.5818C17.432 41.6006 17.2015 41.611 16.9506 41.611C12.3297 41.611 8.48844 38.5033 7.32415 34.2905C3.09555 33.1168 0 29.2396 0 24.6501C0 21.433 1.52577 18.6169 3.85139 16.8024C3.63046 15.9743 3.51431 15.1059 3.51431 14.211C3.51431 8.65992 8.02144 4.20671 13.553 4.20671C14.4573 4.20671 15.3349 4.32578 16.1704 4.54979C17.9952 2.22879 20.8258 0.724243 24.0376 0.724243C27.2425 0.724243 30.0685 2.23001 31.8929 4.54839C32.7299 4.32446 33.6076 4.20671 34.5096 4.20671C40.0388 4.20671 44.5525 8.65757 44.5525 14.211C44.5525 15.1117 44.4318 15.9849 44.2066 16.815C46.5511 18.6495 48.064 21.5024 48.0376 24.7414L48.0375 24.7431C47.9981 29.2579 44.9689 33.0258 40.8536 34.2348C40.5947 35.7228 39.9849 37.359 38.5548 38.7532ZM42.8962 19.7092C42.168 19.0016 41.284 18.4504 40.3001 18.1085C40.8691 17.2743 41.2622 16.3118 41.4233 15.2733C41.477 14.927 41.5049 14.5722 41.5049 14.211C41.5049 10.3591 38.3741 7.25434 34.5096 7.25434C34.147 7.25434 33.7911 7.28132 33.4439 7.33359C32.4021 7.4904 31.4383 7.87487 30.6035 8.44145C30.2584 7.46188 29.7027 6.58044 28.9899 5.85414C27.7305 4.57081 25.981 3.77187 24.0376 3.77187C22.0866 3.77187 20.3345 4.57049 19.0752 5.85338C18.3621 6.57982 17.807 7.46154 17.4634 8.44145C16.6264 7.87863 15.6631 7.49285 14.6225 7.33472C14.274 7.28177 13.9169 7.25434 13.553 7.25434C9.68854 7.25434 6.56193 10.3591 6.56193 14.211C6.56193 14.5685 6.58824 14.9188 6.63932 15.2607C6.79465 16.2999 7.1791 17.26 7.75005 18.1002C6.76912 18.4427 5.88455 18.9938 5.15426 19.701C3.85786 20.9565 3.04763 22.7039 3.04763 24.6501C3.04763 28.4854 6.15756 31.6067 10.0095 31.6067C10.0095 35.4462 13.0903 38.5634 16.9506 38.5634C17.2285 38.5634 17.4492 38.546 17.6457 38.5127C17.993 38.4538 18.2647 38.3449 18.6428 38.1933C18.9238 38.0807 19.2635 37.9445 19.7367 37.7878C19.9204 37.727 20.1241 37.6631 20.3524 37.5962C20.4678 37.6627 20.5814 37.7265 20.6933 37.7878V52.5339H27.685V38.0285C27.967 37.8973 28.2596 37.7517 28.5649 37.5921C28.6768 37.7597 28.8306 37.9052 29.0187 38.0285C29.4435 38.307 30.0435 38.4724 30.7326 38.5238C32.535 38.6582 34.9469 38.0129 36.4273 36.571C37.7966 35.236 37.9867 33.4845 37.9945 31.7158C37.9947 31.6753 37.9948 31.6348 37.9948 31.5943C38.0051 31.5943 38.0155 31.5943 38.0259 31.5943C41.8511 31.586 44.9568 28.5249 44.99 24.7165C45.0061 22.7477 44.2012 20.9773 42.8962 19.7092Z"
              fill="#258B20" />
      </Svg>
    </View>
  );
};