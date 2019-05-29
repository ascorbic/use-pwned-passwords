import {
    useState,
    useCallback,
    ChangeEvent,
    FocusEvent,
    HTMLProps
} from "react";
import { pwnedPassword } from "hibp";

interface Props {
    defaultValue?: string;
}

export const usePwnedPasswords = ({ defaultValue = "" }: Props = {}): [
    string,
    number,
    HTMLProps<HTMLInputElement>
] => {
    const [value, setValue] = useState(defaultValue);
    const [pwnedCount, setPwnedCount] = useState(0);
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.currentTarget.value);
        },
        [setValue]
    );

    const onBlur = useCallback(
        async (event: FocusEvent<HTMLInputElement>) => {
            const result = await pwnedPassword(event.currentTarget.value);
            setPwnedCount(result);
        },
        [setPwnedCount]
    );

    return [value, pwnedCount, { onChange, onBlur, value }];
};
