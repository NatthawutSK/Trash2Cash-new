import { colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { X } from "@tamagui/lucide-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Separator,
  Sheet,
  Stack,
  Text,
  Unspaced,
  YStack,
} from "tamagui";
import SelectReceiveTrash from "./SelectReceiveTrash";
import SelectTrashMaterial from "./SelectTrashMaterial";

const DialogAddTrashMaterial = () => {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <TouchableOpacity
          // onPress={() => console.log("press")}
          style={{
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            width: 65,
            position: "absolute",
            alignSelf: "flex-end",
            bottom: 30,
            right: 30,
            height: 65,
            backgroundColor: colors.green4,
            borderRadius: 100,
          }}
        >
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <KeyboardAwareScrollView>
            <Dialog.Title fos={"$7"} className="font-bold" alignSelf="center">
              เพิ่มวัสดุที่รับ
            </Dialog.Title>
            <Separator
              borderColor={colors.green4}
              w={"100%"}
              marginVertical={"$4"}
            />

            <Stack flexDirection="column" gap={"$3"}>
              <SelectTrashMaterial />

              <Fieldset>
                <Label htmlFor="price">ราคาที่รับ</Label>
                <Input id="price" defaultValue="0" />
              </Fieldset>
              <SelectReceiveTrash />
            </Stack>

            <YStack alignItems="flex-end" marginTop="$2">
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  onPress={() => console.log("save")}
                  mt={"$4"}
                  aria-label="Close"
                  alignSelf="center"
                  w={"100%"}
                  style={{ backgroundColor: colors.green4 }}
                >
                  <Text fos={"$5"} className="font-bold" color={"$green1Light"}>
                    เพิ่มวัสดุที่รับ
                  </Text>
                </Button>
              </Dialog.Close>
            </YStack>

            <Unspaced>
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  pos="absolute"
                  top="$1"
                  right="$1"
                  size="$3"
                  circular
                  icon={X}
                  color="white"
                  bg={colors.green3}
                />
              </Dialog.Close>
            </Unspaced>
          </KeyboardAwareScrollView>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default DialogAddTrashMaterial;
