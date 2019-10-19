/*
 Navicat Premium Data Transfer

 Source Server         : mamishoplist
 Source Server Type    : MySQL
 Source Server Version : 50520
 Source Host           : 127.0.0.1:3306
 Source Schema         : zhuce

 Target Server Type    : MySQL
 Target Server Version : 50520
 File Encoding         : 65001

 Date: 19/10/2019 19:45:52
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for zhucenum
-- ----------------------------
DROP TABLE IF EXISTS `zhucenum`;
CREATE TABLE `zhucenum`  (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `phonenumber` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of zhucenum
-- ----------------------------
INSERT INTO `zhucenum` VALUES (1, '13377293592');
INSERT INTO `zhucenum` VALUES (2, '13377293590');
INSERT INTO `zhucenum` VALUES (3, '13377293598');
INSERT INTO `zhucenum` VALUES (4, '13567890234');
INSERT INTO `zhucenum` VALUES (5, '13589023493');
INSERT INTO `zhucenum` VALUES (6, '13377893567');
INSERT INTO `zhucenum` VALUES (7, '13377234567');
INSERT INTO `zhucenum` VALUES (8, '13005678902');
INSERT INTO `zhucenum` VALUES (9, '13277293592');

SET FOREIGN_KEY_CHECKS = 1;
