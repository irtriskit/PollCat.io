import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const Layout = (props) => {

    const theme = useContext(ThemeContext);

    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
            body {
                background-color: ${theme.colors.primary};
                font-family: sans-serif;
                margin: 0;
            }

            .container {
                height: 100%;
                display: flex;
                flex-direction: column;
                height: 100vh; /* Avoid the IE 10-11 'min-height' bug. */
            }
                
            .content {
                flex: 1 0 auto; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
            }
            
            footer {
                flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
            }
            
            * {
                box-sizing: border-box;
            }

            .poll-container {
                margin: 0 auto;
                max-width: 500px;
                padding: 0 20px;
            }

            .content-container {
                margin: 0 auto;
                max-width: 1000px;
            }
        `}</style>
      </div>
    );
  };

  export default Layout;
  