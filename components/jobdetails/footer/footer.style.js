import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  applyBtnText: {
    lineHeight: 55,
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
});

export default styles;
