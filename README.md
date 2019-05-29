## usePwnedPasswords custom hook

This is a custom React hook that adds support for checking password fields against Trow Hunt's Have I Been Pwned [passwords API](https://haveibeenpwned.com/Passwords). Uses the [hibp module](https://github.com/wKovacs64/hibp) for the heavy lifting.

### Usage

```jsx
import { usePwnedPasswords } from "use-pwned-passwords";

export const App = () => {
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
```

The password is checked onBlur. The `usePwnedPasswords()` function can optionally take a config object. Currently there is one option you can set: `defaultValue` which sets the default value of the password field, but I'm not sure why you would set that.

### Demo

[Open demo](https://use-pwned-passwords.netlify.com/).

To run locally, run `yarn demo`
