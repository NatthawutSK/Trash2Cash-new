import {
  Github,
  Leaf,
  Trash,
  Twitter,
  User,
  Cloudy,
  ChevronRight,
  Map,
  Lock,
  LogOut,
} from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import type { IconProps } from "@tamagui/helpers-icon";
import { ButtonIcon, H6, ScrollView, Text, View } from "tamagui";
import { Avatar, H2, H3, H4, H5, Stack, XStack, ZStack } from "tamagui";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
} from "tamagui";
import { MyStack } from "@/components/MyStack";
import { Icon, IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import StatsUser from "@/components/StatsUser";
import { colors } from "@/constants/Colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { userdata } from "@/MockData/data";
import { useAuth } from "@clerk/clerk-expo";

export default function Profile() {
  const router = useRouter();
  const { signOut } = useAuth();

  type notBtnProp = {
    icon: any;
    text1: string;
    text2: string;
  };

  return (
    <YStack padding={"$4"} marginTop={"$11"} space={"$4"}>
      <XStack jc={"space-around"} w={"100%"} space={"$4"} mb={"$2"}>
        <Avatar br={20} size="$12">
          <Avatar.Image src={userdata.image} />
          <Avatar.Fallback bc="red" />
        </Avatar>
        <Stack
          jc={"center"}
          ai={"center"}
          br={20}
          bc={colors.green4}
          px={20}
          h={"$9"}
          als={"center"}
        >
          <Text
            color={"white"}
            maw={"$14"}
            fontSize={22}
            ww={"break-word"}
            className="text-center font-bold max-h-30"
          >
            {userdata.username}
          </Text>
        </Stack>
      </XStack>
      <StatsUser
        tree={userdata.score.tree}
        trash={userdata.score.trash}
        co2={userdata.score.co2}
      />

      <Button
        bg={colors.green4}
        icon={() => <FontAwesome name="user" color={"white"} size={40} />}
        iconAfter={<ChevronRight size="$2" color={"white"} />}
        h={"$6"}
        jc={"space-between"}
        onPress={() => router.push("/(profile)/editProfile")}
      >
        <Text color={"white"} fos={20}>
          แก้ไขข้อมูลส่วนตัว
        </Text>
      </Button>
      <Button
        bg={colors.green4}
        icon={() => <FontAwesome name="lock" color={"white"} size={40} />}
        iconAfter={<ChevronRight size="$2" color={"white"} />}
        h={"$6"}
        jc={"space-between"}
        onPress={() => router.push("/(profile)/changePassword")}
      >
        <Text color={"white"} fos={20}>
          เปลี่ยนรหัสผ่าน
        </Text>
      </Button>
      <Button
        bg={colors.green4}
        icon={() => <FontAwesome name="history" color={"white"} size={40} />}
        iconAfter={<ChevronRight size="$2" color={"white"} />}
        h={"$6"}
        jc={"space-between"}
        onPress={() => router.push("/(profile)/history")}
      >
        <Text color={"white"} fos={20}>
          ประวัติการซื้อขาย
        </Text>
      </Button>
      <Button
        onPress={() => signOut()}
        bg={colors.green4}
        icon={() => <MaterialIcons name="logout" color={"white"} size={40} />}
        iconAfter={<ChevronRight size="$2" color={"white"} />}
        h={"$6"}
        jc={"space-between"}
      >
        <Text color={"white"} fos={20}>
          ออกจากระบบ
        </Text>
      </Button>
    </YStack>
  );
}
