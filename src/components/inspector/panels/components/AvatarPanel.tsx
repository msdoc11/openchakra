import React, { memo } from "react";
import { Input, Select } from "@chakra-ui/core";
import FormControl from "../../controls/FormControl";
import { useForm } from "../../../../hooks/useForm";
import usePropsSelector from "../../../../hooks/usePropsSelector";
import SwitchControl from "../../controls/SwitchControl";

const AvatarPanel = () => {
  const { setValueFromEvent } = useForm();

  const size = usePropsSelector("size");
  const name = usePropsSelector("name");
  const src = usePropsSelector("src");

  return (
    <>
      <FormControl label="Size" htmlFor="size">
        <Select
          name="size"
          id="size"
          size="sm"
          value={size || ""}
          onChange={setValueFromEvent}
        >
          <option>2xs</option>
          <option>xs</option>
          <option>sm</option>
          <option>md</option>
          <option>lg</option>
          <option>xl</option>
          <option>2xl</option>
        </Select>
      </FormControl>

      <SwitchControl label="Show border" name="showBorder" />

      <FormControl label="Name">
        <Input
          value={name}
          size="sm"
          type="text"
          name="name"
          onChange={setValueFromEvent}
        />
      </FormControl>
      <FormControl label="Source">
        <Input
          value={src}
          size="sm"
          type="text"
          name="src"
          onChange={setValueFromEvent}
        />
      </FormControl>
    </>
  );
};

export default memo(AvatarPanel);
