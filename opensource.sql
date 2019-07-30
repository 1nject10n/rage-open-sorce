/*
Navicat MySQL Data Transfer

Source Server         : 213.160.73.139
Source Server Version : 80017
Source Host           : 213.160.73.139:3306
Source Database       : opensource

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2019-07-30 02:23:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `accounts`
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `socialClub` varchar(255) DEFAULT NULL,
  `hardwareID` varchar(255) NOT NULL DEFAULT 'none',
  `devServer` int(11) NOT NULL DEFAULT '0',
  `teamStatus` int(11) NOT NULL DEFAULT '0',
  `banned` int(11) NOT NULL DEFAULT '0',
  `bannedDay` varchar(255) NOT NULL DEFAULT 'none',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES ('2', 'SnillocTV', '$2a$10$4U38PHJ6lFno2OR8YYEVV.5X7S1lr/esKOlJpZIIq6psT2DT4WV3m', 'HappyAngle2018', 'D8903A045B468240F6E46180E642C110B918AC0CC6C8F78057F018C8DD223FC0E84C9E6C60B48158D9BA6430DB44143010AE08A056B6E938FE90A2587796E180', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('7', 'test', '$2a$10$OIX3B4nqUUlpIV5gMrh5/OpxcC5YaLea7jEo0X65elftcafG8.XN2', 'HappyAngle2018', 'D8903A045B468240F6E46180E642C110B918AC0CC6C8F78057F018C8DD223FC0E84C9E6C60B48158D9BA6430DB44143010AE08A056B6E938FE90A2587796E180', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('8', 'testbeHansnutzer', '$2a$10$avX0Qa1fs4HqzIT34kqssegYzNIABMEFCkQKD0dCqCNSUeq7q3/KW', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('9', 'testbAnnaenutzer', '$2a$10$W1Ru8oxW2XbVazBcj1aMb.Kj1cpXhee4ncCmN6C4xehh3Ko2xbHn2', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('10', 'Craftklinik', '$2a$10$0juJnM6FwAi00F0LjWAYNegS08Rz62Q7uxhvjfiPa0GXKRdJUEx2W', 'Craftklinik', '50A4ED5CEF72B020B99AC3BC155A94E0E2D8F0687B7AE5C850682B7CA556F760ACBC86B0902C0998DB1EF0B09D5E87F0D966C4982A8830F097B6D17490DCF9C0', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('11', 'Balu', '$2a$10$/lUR2gMTXVAJp5LIuN2.l.VMXyLSV83BZQ6tGkJaPGBTe9I6bwkHi', 'HG.Balu', 'DBD6D928D7DE1F7095FE68C85200D5B023B431E45DF40BC878DCBE00CF8A6D408BEA9B78819288F02A00C964B7CCE5F0D9FCF75C98049600C33E01583F8AAD00', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('12', 'Groby', '$2a$10$UpYSrsmG3jm0mN9H.4jVUuctVyspvn4DIP/3j5R1hLGmF0vdGAko.', 'lGrobyl', 'D586B89C7E542A28B99AE41C49D8DFA0EFE4CF3C08DAAA5096C22B7CFC4673805174DDC8C9F25818D64C025C9D5E14709D28C348CBACC3A8A85602486EA20080', '0', '0', '1', 'none');
INSERT INTO `accounts` VALUES ('13', 'BangGro', '$2a$10$dkT/pUlEjwQpjI6NmxRh4uJDVd.xEz7N1KZ1qW066kMjdMyWzrRMy', 'Mabit95', 'D8903A045B942A501F24F01471E486B0750644C059D098C8BBF018C8DD22D2C04AAEFE40135EB210E312399070864880A37608A056B6E91056443DD89050DD80', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('14', 'Hund', '$2a$10$4U38PHJ6lFno2OR8YYEVV.5X7S1lr/esKOlJpZIIq6psT2DT4WV3m', 'V3NOMSKY', 'BD7EA3C45A261F6895FE6888C3F6E4D0AFD2E36805860B38FBB0B2A4D9C8E3E0010276E4EDAEDBF8F8DC85BCACF611302184C354517EF54006669F9009C68340', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('15', 'benjamin171', '$2a$10$2GxIOjgda4qQwUdTymvpz.b/BR8Mv6yWUgZVX29VaPYKP7zsGFa56', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('16', 'ben17@hotmail.no', '$2a$10$txCMvUFF2o/NxH48v39oDesBIP55i9H2J5Ttm9WXsqR60eCygNPEC', 'Elitegamer17', 'E2A091483D6ADAA07D1A42BC7D3E856086E2F844A8664E806354E3443ED8CB20C6EAB3C437A4CA6868C258CCBA603560891EA21019264A18E94AE9E80E443B80', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('17', 'SnillocTV1', '$2y$10$WDW9zKmNeyvi.M4526LATuwKN.yDN8TE8qckjzM1h1V60x3IMLpXO', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('18', 'Snilloctest', '$2y$10$GUQaXuFvqUetL8QCEl/yWuRigtYYe44V5bC1dpzf1ZW9ddLcSVbmi', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('19', 'Snilloctest', '$2y$10$GUQaXuFvqUetL8QCEl/yWuRigtYYe44V5bC1dpzf1ZW9ddLcSVbmi', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('20', 'Snilloctest', '$2y$10$Sl0SGS65zbKlQHyHulBG5OXmeJOd5cldPjwfIHddkcmQ/FQy0c.eO', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('21', 'Snilloctest', '$2y$10$3WxjinuEHV9sbVkoEhn3UeXhBrkfp4xD.Va8KnGyYDwzcvRkrsTa.', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('22', 'Snilloctest', '$2y$10$xSabdUJ.5PRZdWiLLzQK.uuqElhl9MP6AeRyZfdmiho73raL7iU0W', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('23', 'Snilloctest', '$2y$10$xSabdUJ.5PRZdWiLLzQK.uuqElhl9MP6AeRyZfdmiho73raL7iU0W', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('24', 'Snilloctest', '$2y$10$xSabdUJ.5PRZdWiLLzQK.uuqElhl9MP6AeRyZfdmiho73raL7iU0W', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('25', 'Snilloctest1', '$2y$10$iEC8mmBA9XNd7oleREeq6eiZJltFQsGxxjQd79qDFAYx7goicfg9G', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('26', 'Snilloctest1', '$2y$10$iEC8mmBA9XNd7oleREeq6eiZJltFQsGxxjQd79qDFAYx7goicfg9G', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('27', 'Snilloctest1', '$2y$10$iEC8mmBA9XNd7oleREeq6eiZJltFQsGxxjQd79qDFAYx7goicfg9G', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('28', 'Snilloctest1', '$2y$10$0SfDdRXrE8OgjNf5Ig4P1Oqzd8IoK4ZePvGDcoT1WzEN9qdRvAtw2', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('29', 'Snilloctest1', '$2y$10$FY1s0C0mpR4puSu/A6/vkegzHatF7.5be2SHuuVWT0lfbBaxKK/nS', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('30', 'Snillocdev', '$2y$10$xBTTMJ8kbQ9EzNv2OsAoouA4Kwo0gANmUjAoDOTvvsKFsaMFxECq6', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('31', 'Snillocdev', '$2y$10$hzVyPwXqOkn0/p40SIUj/OfTO8kiUe7M8.nXVd6kEBx4Y9ra5YB1q', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('32', 'testbenutzer', '$2y$10$ip4CbLYOqBo93Y06u77zyONnautA7LKI/3A3jS7HtVSQW7cezYwnu', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('33', 'testbenutzer', '$2y$10$wjQkJ40nW7vPI0zWp8YibeDMlf8ltrTk5bFmDT.FBSlrAQYPblPAG', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('34', 'testbenutzer', '$2y$10$yN5VLr0VgEHUoP9I3mmg6efMgzZ6sXliv8I1TmqvcrOljZxnpwgQS', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('35', 'testbenutzer', '$2y$10$7gxaAq3yVQwqiahb9J8l6O8UcQJF2QNCZGYJpR1OI7QS6yfClXqoC', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('36', 'testbenutzer', '$2y$10$PYDpY0Z2eyTtO7duaDrf0ez9.UDuP/FLu/dx1ANJnwhzEJhB5zWRW', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('37', 'testbenutzer', '$2y$10$h9TvqoFxZYF8B45O7W7iD.uCR1TYLqWsrZIdByNapH/cFtPpfHVvO', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('38', 'testbenutzer', '$2y$10$yULWwZ4pMk2tN8jNo76tjejJ/FOBL3O08YVNys6AoRFxXt6M3xfUy', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('39', 'testbenutzer', '$2y$10$lZMkcCVhkj31MVUML2.JSumiCdLe3NxAyiGA7NXk6Ry5ZgF/0gQ8y', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('40', 'testbenutzer', '$2y$10$gSSEoiXa9GurBBy/6SZsreMIhxZonHIeWMjgxlp315vLn4WpRqP5a', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('41', 'testuser', '$2y$10$4y1qLDN.avFgmZeCNe/zLuTubhrrTtTp/ckaeJKcsLG9m9G7vYCpW', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('42', 'testuser', '$2y$10$.pUk3jEw9aCpkUOCfXXD9.v0X6TzFQ4Tl4g3tMEq84vV9mULVzqvq', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('43', 'testuser', '$2y$10$7zI2LQTvQwjRPTj900X29eS9XK3mEwR7Z.51k5uO27R/0NKbpmnZC', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('44', 'testuser', '$2y$10$PBFl1ghQRkV4754twNVrKep0kFgS5nxcriFCqqEHPGXGssedHMtei', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('45', 'testuser', '$2y$10$7NEH//UxiruzgSsrHr54dO2OWo1eUcGCFn6UspKr93F1TIX1m..1e', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('46', 'testuser', '$2y$10$Iwx6vuG1bFbs3hiePTnph.GtSeS3zfUzIbLt.HDoBceUdwySkJnLS', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('47', 'sasasa', '$2y$10$OT/ZGoYCrrui95tA6J4VLewb5ApOQRypVXFMLxGeXUJ0e5o/L7CY2', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('48', 'sasasa', '$2y$10$I7r0c26HdLc.tsvJZXSUnuyhEJXqjjwZJtbEmDLg4mJR6aQPZj5Ee', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('49', 'sasasa', '$2y$10$AwRLJPEjAjiCy.t28G4pZu3M1fYHL3Kb3u6FTNlRHuq2Er/Mu4gsy', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('50', 'sasasa', '$2y$10$PcdD5YUTEf7xISwtha.tgubuUvjWYx32xMExsx239f2ZzC7pRbSHW', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('51', 'sasasa', '$2y$10$ADEVZy6PTq5cVJBb0CLLKuyPcjrnl0jc6BkWKtI5Zv099hQdfVuee', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('52', 'sasasa', '$2y$10$oMAzy/h5fMiHaW6x4dIp0.f76VLWrHETFesxiVN/84aIkh8AEaTH2', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('53', 'sasasa', '$2y$10$Gv2gogJAbLvBXQM7Ba45xuKvJa4s8cmUc7o1sopIwX5QYdd2Mrxru', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('54', 'helloworld', '$2y$10$gGIhD6ofid7EftVydDESkO10dXasUYehHKZ0E4LwXFlG.g7V4GhCC', null, 'none', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('55', 'gta6release@gmail.com', '$2a$10$iwlXTpxFroqPYQlzOGhAH.zKlWyb0NRyeRtNPbSc8rZ.hhOK0cvD.', 'Uno87-_-', '186A93B4CDDEE7389EE0684C155A67C04168A2E0F88E673801C27B4436A0C82049B69B3015F85AC0D8B23BBC35A60F50CE6028F47D12CFA0E98812A0B8D0E800', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('56', 'Brooken', '$2a$10$WJwfErL.xpNF59BcB2sYvOD.KyzF/k/E1idQcF9sNxlsbEwqoSrEe', 'BrookenV2_', 'D8903A045B1254305552DAFCD590F0B075180B701AC0B59818500A1C435A74C08D4A2AF4ADD070B8ED38E390CAC07D305810DA342BA29450C5427AEC85664B40', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('57', 'Niklas', '$2a$10$5MEQ1XDqKK6ComZnbS12buX8/R3jp1G3edAmkmhypudzbJNO/SX1G', 'BrokenV2_', 'E8B8E5C0B04E07E08C72E4E0BA06E0607728383043A0903819D8A40CFCB01EA020ECF55088A8A18070222BD0BCA61480823A60787378D820FF60500C3D643780', '0', '0', '0', 'none');
INSERT INTO `accounts` VALUES ('58', 'MrRainbowgamer', '$2a$10$OVAPdg8OsohjuPohguQJveUTgWx1pvr/UUQnWco.iG5p.fStlIkDO', 'MrRainbowgamer', 'D8903A045B9431103FDC13486C5E59C075E2E50CF0626AE089F018C8DD22D2E062EE0284DE28CF980C12E3B4DBA05D20D41208A056B6E9108FB49D28F56C3300', '0', '0', '0', 'none');

-- ----------------------------
-- Table structure for `atms`
-- ----------------------------
DROP TABLE IF EXISTS `atms`;
CREATE TABLE `atms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` int(255) DEFAULT NULL,
  `posY` int(255) DEFAULT NULL,
  `posZ` int(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `usable` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atms
-- ----------------------------
INSERT INTO `atms` VALUES ('1', '147', '-1035', '29', '5000', '0');

-- ----------------------------
-- Table structure for `bank_konten`
-- ----------------------------
DROP TABLE IF EXISTS `bank_konten`;
CREATE TABLE `bank_konten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerId` int(11) DEFAULT '0',
  `amount` decimal(38,2) DEFAULT '0.00',
  `kontonummer` varchar(50) DEFAULT NULL,
  `beschreibung` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bank_konten
-- ----------------------------
INSERT INTO `bank_konten` VALUES ('1', '2', '30000.00', '14654565', 'Anna Klein');

-- ----------------------------
-- Table structure for `blips`
-- ----------------------------
DROP TABLE IF EXISTS `blips`;
CREATE TABLE `blips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` float NOT NULL DEFAULT '0',
  `posY` float NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  `color` int(11) NOT NULL DEFAULT '0',
  `blipid` int(11) NOT NULL DEFAULT '0',
  `scale` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of blips
-- ----------------------------
INSERT INTO `blips` VALUES ('1', '-85.276', '38.127', 'License Shop', '1', '1', '1');
INSERT INTO `blips` VALUES ('2', '272', '2857', 'Stone Mine', '1', '464', '1');
INSERT INTO `blips` VALUES ('3', '2391', '3308', 'Stone Proccessor', '1', '365', '1');
INSERT INTO `blips` VALUES ('4', '2341', '3126', 'Cement Selling', '1', '628', '1');

-- ----------------------------
-- Table structure for `characters`
-- ----------------------------
DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountID` int(11) DEFAULT '0',
  `ped` int(11) DEFAULT '0',
  `pedHash` varchar(50) DEFAULT '0',
  `created` int(11) DEFAULT '0',
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `posX` float DEFAULT '-1038.79',
  `posY` float DEFAULT '-2740.24',
  `posZ` float DEFAULT '13.858',
  `posR` float DEFAULT '314',
  `dimension` int(11) DEFAULT '0',
  `health` float DEFAULT '100',
  `armor` float DEFAULT '0',
  `food` float DEFAULT '100',
  `drink` float DEFAULT '100',
  `adminRank` int(11) DEFAULT '0',
  `faction` varchar(1255) DEFAULT 'Civillian',
  `factioncloth` varchar(1255) DEFAULT 'Zivil',
  `duty` int(11) DEFAULT '0',
  `onlineId` int(11) DEFAULT '0',
  `isOnline` int(11) DEFAULT '0',
  `factionrang` int(11) DEFAULT '0',
  `money` float DEFAULT '500',
  `phone` int(11) DEFAULT '0',
  `phoneNumber` int(11) DEFAULT '0',
  `data` varchar(555) DEFAULT '0',
  `hat` int(11) DEFAULT '0',
  `hattext` int(11) DEFAULT '0',
  `eye` int(11) DEFAULT '0',
  `eyetext` int(11) DEFAULT '0',
  `mask` int(11) DEFAULT '0',
  `masktext` int(11) DEFAULT '0',
  `shirt` int(11) DEFAULT '0',
  `shirttext` int(11) DEFAULT '0',
  `jacket` int(11) DEFAULT '0',
  `jackettext` int(11) DEFAULT '0',
  `body` int(11) DEFAULT '0',
  `bodytext` int(11) DEFAULT '0',
  `torso` int(11) DEFAULT '0',
  `leg` int(11) DEFAULT '0',
  `legtext` int(11) DEFAULT '0',
  `shoe` int(11) DEFAULT '0',
  `shoetext` int(11) DEFAULT '0',
  `earpice` int(11) DEFAULT '0',
  `accessoire` int(11) DEFAULT '0',
  `arm` int(11) DEFAULT '0',
  `bday` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of characters
-- ----------------------------
INSERT INTO `characters` VALUES ('2', '2', '0', '0', '1', 'Anna', 'Klein', '2347.02', '3129.47', '48.2087', '349.925', '0', '88', '95', '38', '20', '6', 'LSPD', 'Zivil', '1', '0', '1', '6', '4489', '0', '323548632', '{\"Gender\":1,\"Parents\":{\"Father\":0,\"Mother\":37,\"Similarity\":0,\"SkinSimilarity\":0},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":1,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1}],\"Hair\":[3,29,29,0,0,0,0,0,0]}', '135', '6', '11', '0', '0', '0', '2', '0', '121', '0', '0', '0', '12', '80', '4', '1', '7', '0', '0', '12', null);
INSERT INTO `characters` VALUES ('3', '2', '0', '0', '1', 'Jack', 'Collins', '10.4857', '21.3888', '70.6414', '291.699', '0', '88', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '0', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":14,\"Mother\":24,\"Similarity\":0.12,\"SkinSimilarity\":0.44},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1}],\"Hair\":[0,0,0,0,0,0,0,0,0]}', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `characters` VALUES ('9', '7', '0', '0', '1', 'test', 'test', '-0.0807889', '19.5883', '71.0562', '124.29', '0', '31', '0', '0', '0', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":0,\"Mother\":21,\"Similarity\":0,\"SkinSimilarity\":0},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1}],\"Hair\":[0,0,0,0,0,0,0,0,0]}', '255', '0', '0', '0', '0', '0', '15', '0', '41', '0', '255', '0', '6', '1', '0', '1', '0', '0', '0', '0', '2134165');
INSERT INTO `characters` VALUES ('10', '10', '0', '0', '1', 'Marcel', 'Maj', '127.552', '-987.308', '29.2967', '238.614', '0', '33', '0', '78', '51', '0', 'Civillian', 'Zivil', '0', '1', '0', '0', '500', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":0,\"Mother\":38,\"Similarity\":0.5,\"SkinSimilarity\":1},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":10,\"Opacity\":1},{\"Value\":0,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":3,\"Opacity\":1}],\"Hair\":[3,3,2,0,3,3,0,0,3]}', '121', '0', '0', '0', '0', '0', '2', '0', '28', '0', '255', '108', '1', '10', '0', '10', '0', '0', '0', '0', '11.12.2000');
INSERT INTO `characters` VALUES ('11', '11', '0', '0', '1', 'Billy ', 'Weber', '0', '0', '0', '0', '0', '100', '0', '0', '0', '0', 'Civillian', 'Zivil', '0', '2', '0', '0', '500', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":0,\"Mother\":21,\"Similarity\":0,\"SkinSimilarity\":0},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1}],\"Hair\":[0,0,0,0,0,0,0,0,0]}', '121', '0', '0', '0', '0', '0', '2', '0', '22', '1', '255', '129', '0', '1', '0', '1', '0', '0', '0', '0', '25.01.1988');
INSERT INTO `characters` VALUES ('12', '12', '0', '0', '1', 'Diego', 'Lynn', '111.699', '-999.847', '28.8989', null, '0', '5', '0', '51', '43', '0', 'Civillian', 'Zivil', '0', '3', '0', '0', '500', '0', '0', '{\"Gender\":1,\"Parents\":{\"Father\":7,\"Mother\":22,\"Similarity\":0.11,\"SkinSimilarity\":0.8200000000000001},\"Features\":[0,0,0,0,0,0,0,0,0,0.1,0,0.07,-0.18,0.04,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":30,\"Opacity\":0.91},{\"Value\":3,\"Opacity\":1},{\"Value\":13,\"Opacity\":1},{\"Value\":2,\"Opacity\":1},{\"Value\":4,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":1,\"Opacity\":1},{\"Value\":2,\"Opacity\":1},{\"Value\":3,\"Opacity\":1}],\"Hair\":[14,20,0,6,3,0,0,0,5]}', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Mai');
INSERT INTO `characters` VALUES ('13', '13', '0', '0', '1', 'Manni', 'Lynn', '271.398', '-1501.08', '29.2341', '229', '0', '100', '0', '49', '68', '0', 'Civillian', 'Zivil', '0', '2', '0', '0', '500', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":1,\"Mother\":26,\"Similarity\":1,\"SkinSimilarity\":1},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":10,\"Opacity\":1},{\"Value\":19,\"Opacity\":1},{\"Value\":1,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":2,\"Opacity\":1}],\"Hair\":[2,3,0,0,57,6,0,0,0]}', '121', '0', '0', '0', '0', '0', '2', '0', '28', '0', '255', '129', '1', '10', '0', '10', '0', '0', '0', '0', '23.03.1995');
INSERT INTO `characters` VALUES ('14', '14', '1', 'a_c_chop', '1', 'Hund', 'Katze', '-2.03503', '6.01667', '70.933', '164.906', '0', '3', '0', '0', '0', '6', 'Civillian', 'Zivil', '0', '4', '0', '0', '500', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":0,\"Mother\":21,\"Similarity\":0,\"SkinSimilarity\":0},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1}],\"Hair\":[0,0,0,0,0,0,0,0,0]}', '121', '0', '0', '0', '0', '0', '2', '0', '22', '1', '255', '28', '0', '1', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO `characters` VALUES ('15', '15', '0', '0', '0', 'Henry', 'Hollister', '0', '0', '0', '0', '0', '100', '0', '0', '0', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '171293');
INSERT INTO `characters` VALUES ('16', '16', '0', '0', '1', 'tetete', 'tetet', '133.452', '-988.253', '28.593', '73.7153', '0', '0', '0', '0', '26', '0', 'Civillian', 'Zivil', '0', '5', '0', '0', '500', '0', '0', '{\"Gender\":0,\"Parents\":{\"Father\":3,\"Mother\":27,\"Similarity\":0.31,\"SkinSimilarity\":0.55},\"Features\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"Appearance\":[{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1},{\"Value\":255,\"Opacity\":1}],\"Hair\":[22,44,49,53,12,9,5,15,35]}', '121', '0', '0', '0', '1', '0', '2', '0', '28', '0', '255', '53', '1', '10', '0', '10', '0', '0', '0', '0', '');
INSERT INTO `characters` VALUES ('17', '0', '0', '0', '0', 'test', 'test', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '4156456');
INSERT INTO `characters` VALUES ('18', '0', '0', '0', '0', 'test', 'test', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '4156456');
INSERT INTO `characters` VALUES ('19', '0', '0', '0', '0', 'test', 'test', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '4156456');
INSERT INTO `characters` VALUES ('20', '0', '0', '0', '0', 'test', 'test', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '4156456');
INSERT INTO `characters` VALUES ('21', '0', '0', '0', '0', 'shadj', 'sadfkhj', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '546546');
INSERT INTO `characters` VALUES ('22', '0', '0', '0', '0', 'Anna Groß', 'Fix', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '4564');
INSERT INTO `characters` VALUES ('23', null, '0', '0', '0', 'Johnny', 'Fernandez', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '06.06.2000');
INSERT INTO `characters` VALUES ('24', null, '0', '0', '0', 'Johnny', 'Fernandez', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '06062000');
INSERT INTO `characters` VALUES ('25', null, '0', '0', '0', 'Johnny', 'Fernandez', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '06.06.2000');
INSERT INTO `characters` VALUES ('26', null, '0', '0', '0', 'Johnny', 'Fernandez', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2000');
INSERT INTO `characters` VALUES ('27', null, '0', '0', '0', '', '', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '');
INSERT INTO `characters` VALUES ('28', '55', '0', '0', '0', 'gta6release@gmail.com', 'gta6release@gmail.com', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Erik757');
INSERT INTO `characters` VALUES ('29', '55', '0', '0', '0', 'Johnny', 'Fernandez', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '06. 06. 2000');
INSERT INTO `characters` VALUES ('30', null, '0', '0', '0', 'Franklin', 'White', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '09.11.1994');
INSERT INTO `characters` VALUES ('31', '56', '0', '0', '0', 'Franklin', 'White', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '09.11.1994');
INSERT INTO `characters` VALUES ('32', null, '0', '0', '0', 'Niklas', 'Ramo', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '29.7.2004');
INSERT INTO `characters` VALUES ('33', null, '0', '0', '0', 'Marcel', 'England', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '13.03.1997');
INSERT INTO `characters` VALUES ('34', null, '0', '0', '0', 'Marcel', 'Schmidt', '-1038.79', '-2740.24', '13.858', '314', '0', '100', '0', '100', '100', '0', 'Civillian', 'Zivil', '0', '0', '0', '0', '500', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '14.02.1998');

-- ----------------------------
-- Table structure for `faction`
-- ----------------------------
DROP TABLE IF EXISTS `faction`;
CREATE TABLE `faction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `dutyX` int(11) DEFAULT NULL,
  `dutyY` int(11) DEFAULT NULL,
  `dutyZ` int(11) DEFAULT NULL,
  `clothesX` int(11) DEFAULT NULL,
  `clothesY` int(11) DEFAULT NULL,
  `clothesZ` int(11) DEFAULT NULL,
  `equipX` int(11) DEFAULT NULL,
  `equipY` int(11) DEFAULT NULL,
  `equipZ` int(11) DEFAULT NULL,
  `pcX` int(11) DEFAULT NULL,
  `pcY` int(11) DEFAULT NULL,
  `pcZ` int(11) DEFAULT NULL,
  `chiefX` int(11) DEFAULT NULL,
  `chiefY` int(11) DEFAULT NULL,
  `chiefZ` int(11) DEFAULT NULL,
  `vehicleX` int(11) DEFAULT NULL,
  `vehicleY` int(11) DEFAULT NULL,
  `vehicleZ` int(11) DEFAULT NULL,
  `parkX` int(11) DEFAULT NULL,
  `parkY` int(11) DEFAULT NULL,
  `parkZ` int(11) DEFAULT NULL,
  `ausnahme` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of faction
-- ----------------------------
INSERT INTO `faction` VALUES ('1', 'LSPD', '440', '-976', '31', '458', '-993', '31', '452', '-980', '31', '442', '-979', '31', '448', '-973', '31', '441', '-1000', '31', '452', '-997', '26', '0');

-- ----------------------------
-- Table structure for `farming`
-- ----------------------------
DROP TABLE IF EXISTS `farming`;
CREATE TABLE `farming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `farmX` float NOT NULL DEFAULT '0',
  `farmY` float NOT NULL DEFAULT '0',
  `farmZ` float NOT NULL DEFAULT '0',
  `farmItem` int(11) NOT NULL DEFAULT '0',
  `processorsX` float NOT NULL DEFAULT '0',
  `processorsY` float NOT NULL DEFAULT '0',
  `processorsZ` float NOT NULL DEFAULT '0',
  `processorsR` float NOT NULL DEFAULT '0',
  `processorsPed` varchar(50) NOT NULL DEFAULT '0',
  `processorsneedItem` int(11) NOT NULL DEFAULT '0',
  `processorsgiveItem` int(11) NOT NULL DEFAULT '0',
  `sellX` float NOT NULL DEFAULT '0',
  `sellY` float NOT NULL DEFAULT '0',
  `sellZ` float NOT NULL DEFAULT '0',
  `sellR` float NOT NULL DEFAULT '0',
  `sellPed` varchar(50) NOT NULL DEFAULT '0',
  `sellneedItem` int(11) NOT NULL DEFAULT '0',
  `sellPrice` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of farming
-- ----------------------------
INSERT INTO `farming` VALUES ('1', '2727.06', '2856.93', '37.955', '5', '2391.01', '3308.19', '47.64', '141', '0x4BA14CCA', '5', '6', '2341.03', '3126.44', '48.208', '342', '0x95EF18E3', '6', '80');

-- ----------------------------
-- Table structure for `garage`
-- ----------------------------
DROP TABLE IF EXISTS `garage`;
CREATE TABLE `garage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pedx` int(11) DEFAULT NULL,
  `pedy` int(11) DEFAULT NULL,
  `pedz` int(11) DEFAULT NULL,
  `pedr` int(11) DEFAULT NULL,
  `spawn1x` int(11) DEFAULT NULL,
  `spawn1y` int(11) DEFAULT NULL,
  `spawn1z` int(11) DEFAULT NULL,
  `spawn1r` int(11) DEFAULT NULL,
  `spawn2x` int(11) DEFAULT NULL,
  `spawn2y` int(11) DEFAULT NULL,
  `spawn2z` int(11) DEFAULT NULL,
  `spawn2r` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of garage
-- ----------------------------
INSERT INTO `garage` VALUES ('1', 'test', '162', '-1037', '29', '266', '165', '-1037', '29', '288', '168', '-1028', '29', '341');
INSERT INTO `garage` VALUES ('2', null, '170', '-1039', '29', '254', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `items`
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(50) NOT NULL DEFAULT '0',
  `usable` varchar(50) NOT NULL DEFAULT '0',
  `type` varchar(50) NOT NULL DEFAULT '0',
  `fillvalue` int(11) NOT NULL DEFAULT '0',
  `itemcount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES ('1', 'Wasser', 'Y', 'drink', '15', '1');
INSERT INTO `items` VALUES ('2', 'Belegtes Brötchen', 'Y', 'food', '15', '1');
INSERT INTO `items` VALUES ('3', 'Tasche', 'Y', 'bag', '0', '1');
INSERT INTO `items` VALUES ('4', 'Tasche ausgepackt', 'Y', 'bag', '0', '1');
INSERT INTO `items` VALUES ('5', 'Stone', 'N', 'farmin', '0', '1');
INSERT INTO `items` VALUES ('6', 'Cement', 'N', 'farming', '0', '1');

-- ----------------------------
-- Table structure for `licenses`
-- ----------------------------
DROP TABLE IF EXISTS `licenses`;
CREATE TABLE `licenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT '0',
  `weapona` int(11) NOT NULL DEFAULT '0',
  `weaponb` int(11) NOT NULL DEFAULT '0',
  `pkw` int(11) NOT NULL DEFAULT '0',
  `lkw` int(11) NOT NULL DEFAULT '0',
  `pilot` int(11) NOT NULL DEFAULT '0',
  `job` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of licenses
-- ----------------------------
INSERT INTO `licenses` VALUES ('4', '2', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('5', '3', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('6', '8', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('7', '9', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('8', '9', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('9', '10', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('10', '13', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('11', '14', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('12', '16', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('13', '11', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for `shop_items`
-- ----------------------------
DROP TABLE IF EXISTS `shop_items`;
CREATE TABLE `shop_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemId` int(11) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT '0',
  `shopId` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of shop_items
-- ----------------------------
INSERT INTO `shop_items` VALUES ('1', '1', '25', '1', 'Wasser');
INSERT INTO `shop_items` VALUES ('2', '2', '25', '1', 'Belegtes Brötchen');

-- ----------------------------
-- Table structure for `shops`
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL DEFAULT '0',
  `posX` float NOT NULL DEFAULT '0',
  `posY` float NOT NULL DEFAULT '0',
  `posZ` float NOT NULL DEFAULT '0',
  `posR` float NOT NULL DEFAULT '0',
  `ped` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of shops
-- ----------------------------
INSERT INTO `shops` VALUES ('1', '0', '24.47', '-1346.1', '29.497', '269.4', '0xB2273D4E');
INSERT INTO `shops` VALUES ('3', '0', '24.98', '-1343', '29', '244', '0x040EABE3');

-- ----------------------------
-- Table structure for `shortcuts`
-- ----------------------------
DROP TABLE IF EXISTS `shortcuts`;
CREATE TABLE `shortcuts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) DEFAULT NULL,
  `num1animA` varchar(255) DEFAULT NULL,
  `num1animB` varchar(255) DEFAULT NULL,
  `num1animC` int(11) DEFAULT NULL,
  `num1animD` int(11) DEFAULT NULL,
  `num1name` varchar(255) DEFAULT 'Nicht Belegt',
  `num2animA` varchar(255) DEFAULT NULL,
  `num2animB` varchar(255) DEFAULT NULL,
  `num2animC` int(11) DEFAULT NULL,
  `num2animD` int(11) DEFAULT NULL,
  `num2name` varchar(255) DEFAULT 'Nicht Belegt',
  `num3animA` varchar(255) DEFAULT NULL,
  `num3animB` varchar(255) DEFAULT NULL,
  `num3animC` int(11) DEFAULT NULL,
  `num3animD` int(11) DEFAULT NULL,
  `num3name` varchar(255) DEFAULT 'Nicht Belegt',
  `num4animA` varchar(255) DEFAULT 'Nicht Belegt',
  `num4animB` varchar(255) DEFAULT 'Nicht Belegt',
  `num4animC` int(11) DEFAULT NULL,
  `num4animD` int(11) DEFAULT NULL,
  `num4name` varchar(255) DEFAULT 'Nicht Belegt',
  `num5animA` varchar(255) DEFAULT NULL,
  `num5animB` varchar(255) DEFAULT NULL,
  `num5animC` int(11) DEFAULT NULL,
  `num5animD` int(11) DEFAULT NULL,
  `num5name` varchar(255) DEFAULT 'Nicht Belegt',
  `num6animA` varchar(255) DEFAULT NULL,
  `num6animB` varchar(255) DEFAULT NULL,
  `num6animC` int(11) DEFAULT NULL,
  `num6animD` int(11) DEFAULT NULL,
  `num6name` varchar(255) DEFAULT 'Nicht Belegt',
  `num7animA` varchar(255) DEFAULT NULL,
  `num7animB` varchar(255) DEFAULT NULL,
  `num7animC` int(11) DEFAULT NULL,
  `num7animD` int(11) DEFAULT NULL,
  `num7name` varchar(255) DEFAULT 'Nicht Belegt',
  `num8animA` varchar(255) DEFAULT NULL,
  `num8animB` varchar(255) DEFAULT NULL,
  `num8animC` int(11) DEFAULT NULL,
  `num8animD` int(11) DEFAULT NULL,
  `num8name` varchar(255) DEFAULT 'Nicht Belegt',
  `num9animA` varchar(255) DEFAULT NULL,
  `num9animB` varchar(255) DEFAULT NULL,
  `num9animC` int(11) DEFAULT NULL,
  `num9animD` int(11) DEFAULT NULL,
  `num9name` varchar(255) DEFAULT 'Nicht Belegt',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shortcuts
-- ----------------------------
INSERT INTO `shortcuts` VALUES ('1', '2', '\"amb@world_human_sunbathe@male@back@base\"', '\"base\"', '1', '35', 'Auf dem Rücken liegen', '\"timetable@amanda@drunk@idle_a\"', '\"idle_pinot\"', '1', '33', 'Betrunken liegen', '\"amb@world_human_yoga@female@base\"', '\"base_c\"', '1', '33', 'Yoga 5', '\"anim@heists@fleeca_bank@ig_7_jetski_owner\"', '\"owner_idle\"', '1', '33', 'Sitzen (Männl.)', '\"anim@mp_player_intupperwave\"', '\"idle_a\"', '1', '49', 'Winken', '\"anim@mp_player_intcelebrationmale@freakout\"', '\"freakout\"', '1', '49', 'Ausrasten', '\"anim@mp_player_intupperwave\"', '\"idle_a\"', '1', '49', 'Winken', '\"anim@mp_player_intupperwave\"', '\"idle_a\"', '1', '49', 'Nicht Belegt', '\"amb@world_human_sunbathe@male@back@base\"', '\"base\"', '1', '35', 'Auf dem Rücken liegen');
INSERT INTO `shortcuts` VALUES ('5', '3', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', null, null, null, null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('6', '8', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('7', '9', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('8', '9', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('9', '10', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', '\"missheist_jewel\"', '\"manageress_kneel_loop\"', '1', '33', 'Auf die Knie', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('10', '13', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('11', '14', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('12', '16', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('13', '11', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');

-- ----------------------------
-- Table structure for `user_items`
-- ----------------------------
DROP TABLE IF EXISTS `user_items`;
CREATE TABLE `user_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT '0',
  `itemId` int(11) NOT NULL DEFAULT '0',
  `amount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_items
-- ----------------------------
INSERT INTO `user_items` VALUES ('11', '2', '1', '19');
INSERT INTO `user_items` VALUES ('12', '2', '2', '16');
INSERT INTO `user_items` VALUES ('13', '14', '1', '1');

-- ----------------------------
-- Table structure for `vehiclekeys`
-- ----------------------------
DROP TABLE IF EXISTS `vehiclekeys`;
CREATE TABLE `vehiclekeys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyOwner` int(11) DEFAULT NULL,
  `vehID` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `isActive` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of vehiclekeys
-- ----------------------------
INSERT INTO `vehiclekeys` VALUES ('1', '2', '1', '2', 'Y');
INSERT INTO `vehiclekeys` VALUES ('2', '14', '1', '1', 'Y');

-- ----------------------------
-- Table structure for `vehicles`
-- ----------------------------
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) DEFAULT NULL,
  `charId` int(11) DEFAULT NULL,
  `numberPlate` varchar(50) DEFAULT 'NOLIC',
  `parked` int(11) DEFAULT '1',
  `impounded` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of vehicles
-- ----------------------------
INSERT INTO `vehicles` VALUES ('1', 'raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('2', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('3', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('4', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('5', 'Raiden', '2', 'Gurke', '1', '0');
