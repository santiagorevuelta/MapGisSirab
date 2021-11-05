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
        height={height} viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M36.4834 32.7471L36.4825 32.748C34.9801 34.2113 32.9206 34.9261 31.186 35.1136C30.7362 35.1622 30.2718 35.1798 29.8085 35.1568V47.1073H18.641V35.1609C18.4587 35.1769 18.262 35.1858 18.0479 35.1858C14.1047 35.1858 10.8268 32.5339 9.83331 28.939C6.22491 27.9374 3.58337 24.6289 3.58337 20.7125C3.58337 17.9672 4.88536 15.5641 6.86989 14.0158C6.68136 13.3091 6.58225 12.5681 6.58225 11.8045C6.58225 7.06755 10.4283 3.26748 15.1486 3.26748C15.9203 3.26748 16.6691 3.36908 17.3821 3.56024C18.9393 1.57965 21.3547 0.295776 24.0954 0.295776C26.8303 0.295776 29.2418 1.58069 30.7986 3.55904C31.5129 3.36796 32.2619 3.26748 33.0316 3.26748C37.7498 3.26748 41.6015 7.06554 41.6015 11.8045C41.6015 12.5731 41.4985 13.3182 41.3064 14.0266C43.307 15.592 44.5979 18.0264 44.5754 20.7904L44.5754 20.7919C44.5417 24.6445 41.9568 27.8597 38.4451 28.8914C38.2242 30.1612 37.7038 31.5574 36.4834 32.7471ZM40.1881 16.4963C39.5667 15.8925 38.8124 15.4221 37.9728 15.1304C38.4583 14.4185 38.7938 13.5971 38.9312 12.711C38.9771 12.4155 39.0009 12.1127 39.0009 11.8045C39.0009 8.51751 36.3293 5.86812 33.0316 5.86812C32.7221 5.86812 32.4184 5.89114 32.1221 5.93575C31.2331 6.06956 30.4107 6.39764 29.6983 6.88113C29.4039 6.04522 28.9297 5.29306 28.3214 4.67329C27.2468 3.57818 25.7538 2.89642 24.0954 2.89642C22.4306 2.89642 20.9354 3.57791 19.8608 4.67263C19.2523 5.29253 18.7787 6.04493 18.4854 6.88113C17.7712 6.40085 16.9492 6.07165 16.0612 5.93671C15.7639 5.89153 15.4592 5.86812 15.1486 5.86812C11.8509 5.86812 9.18289 8.51751 9.18289 11.8045C9.18289 12.1095 9.20533 12.4085 9.24893 12.7002C9.38147 13.587 9.70954 14.4063 10.1967 15.1233C9.35969 15.4155 8.60485 15.8858 7.98167 16.4893C6.87541 17.5606 6.18402 19.0518 6.18402 20.7125C6.18402 23.9853 8.83782 26.6488 12.1248 26.6488C12.1248 29.9251 14.7537 32.5851 18.0479 32.5851C18.285 32.5851 18.4733 32.5704 18.641 32.5419C18.9374 32.4916 19.1693 32.3987 19.4919 32.2694C19.7317 32.1733 20.0216 32.0571 20.4254 31.9233C20.5821 31.8714 20.756 31.8169 20.9507 31.7599C21.0492 31.8166 21.1461 31.871 21.2417 31.9233V44.5067H27.2079V32.1287C27.4485 32.0167 27.6982 31.8925 27.9588 31.7563C28.0543 31.8993 28.1855 32.0235 28.346 32.1287C28.7085 32.3664 29.2205 32.5075 29.8085 32.5514C31.3466 32.6661 33.4047 32.1154 34.668 30.885C35.8365 29.7458 35.9986 28.2511 36.0053 26.7419C36.0055 26.7073 36.0056 26.6728 36.0056 26.6382C36.0144 26.6382 36.0232 26.6382 36.0321 26.6382C39.2963 26.6311 41.9465 24.019 41.9748 20.7692C41.9885 19.0891 41.3017 17.5783 40.1881 16.4963Z"
              fill="#258B20" />
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.47115 38.2539C4.09443 39.9972 0.657654 42.6603 0.657654 45.6445C0.657654 50.8959 11.3005 55.1531 24.4291 55.1531C37.5578 55.1531 48.2006 50.8959 48.2006 45.6445C48.2006 42.6603 44.7638 39.9972 39.3871 38.2539C38.9665 39.1679 38.4646 40.0367 37.8907 40.8511C38.6954 41.094 39.4509 41.3571 40.1515 41.6374C42.0984 42.4161 43.4776 43.2702 44.3223 44.069C45.1607 44.8619 45.2749 45.3953 45.2749 45.6445C45.2749 45.8937 45.1607 46.427 44.3223 47.22C43.4776 48.0187 42.0984 48.8729 40.1515 49.6516C36.274 51.2026 30.7165 52.2274 24.4291 52.2274C18.1417 52.2274 12.5843 51.2026 8.70675 49.6516C6.75985 48.8729 5.38064 48.0187 4.53602 47.22C3.69757 46.427 3.58337 45.8937 3.58337 45.6445C3.58337 45.3953 3.69757 44.8619 4.53602 44.069C5.38064 43.2702 6.75985 42.4161 8.70675 41.6374C9.40739 41.3571 10.1629 41.094 10.9676 40.8511C10.3937 40.0367 9.89176 39.1679 9.47115 38.2539Z"
              fill="#258B20" />
      </Svg>
    </View>
  );
};
