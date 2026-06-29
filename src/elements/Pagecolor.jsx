function ThemeButton() {

    const changeTheme = () => {


        const html = document.documentElement;


        const current =
            html.getAttribute("data-theme");


        if (current === "dark") {

            html.setAttribute(
                "data-theme",
                "light"
            )

        } else {

            html.setAttribute(
                "data-theme",
                "dark"
            )

        }


    }


    return (

        <button onClick={changeTheme}>

            🌙 Tema

        </button>

    )


}


export default ThemeButton;