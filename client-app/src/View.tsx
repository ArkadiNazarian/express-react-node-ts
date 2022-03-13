import { Iprops } from "./Model";

export function View(props: Iprops) {
    return (
        <div>
            <form onSubmit={props.action_submit}>
                <div>
                    <input
                        data-testid="email-input"
                        name="email"
                        type="email"
                        value={props.form_data.email}
                        onChange={props.handleChange}
                        placeholder="email@example.com"
                    />
                </div>
                <div>
                    {
                        props.form_errors.email
                    }
                </div>
                <div>
                    <input
                        id="password-input"
                        name="password"
                        type="password"
                        value={props.form_data.password}
                        onChange={props.handleChange}
                        placeholder="password"
                    />
                </div>
                <div>
                    {
                        props.form_errors.password
                    }
                </div>
                <div>
                    <button id='submit-button' type="submit">Submit</button>
                </div>
            </form>
            <h1>Version: {props.version}</h1>
            <h1>Email : {props.email}</h1>
            <h1>Password : {props.password}</h1>
        </div>
    )
}