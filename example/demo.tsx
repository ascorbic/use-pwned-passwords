import React, { FC } from "react";
import { render } from "react-dom";

import { usePwnedPasswords } from "../usePwnedPasswords";

export const App: FC = () => {
    const [passwordValue, pwnedCount, fieldProps] = usePwnedPasswords();

    return (
        <fieldset>
            {pwnedCount ? (
                <p className="error">
                    Your password has been found in {pwnedCount} breaches.
                    Please choose a more secure one.
                </p>
            ) : null}
            <label>
                Enter your password:
                <input type="password" {...fieldProps} />
            </label>
        </fieldset>
    );
};
render(<App />, document.getElementById("root"));
