import React from "react";
import keycloak from "./keycloak";

const Login = () => {
  const handleLogin = () => {
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
        enableLogging: true,
        pkceMethod: "S256",
        redirectUri: "http://localhost:3000/",
        storeTokens: true,
      })
      .then((authenticated) => {
        if (authenticated) {
          console.log("authenticated", authenticated);

          console.log("User is authenticated");
        }
      })
      .catch((err) => {
        console.error("Keycloak initialization failed:", err);
      });
  };
  return (
    <div>
      <div
        class="container demo-1"
        style={{ height: "100vh", background: "#333" }}
      >
        <div class="content">
          <div id="large-header" class="large-header">
            <h1>Clean Login Form</h1>
            <div class="main-agileits">
              <div class="form-w3-agile">
                <h2>login Now</h2>
                <form>
                  <div class="form-sub-w3">
                    <input
                      type="text"
                      name="Username"
                      placeholder="Username "
                      required=""
                    />
                    <div class="icon-w3">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="form-sub-w3">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      required=""
                    />
                    <div class="icon-w3">
                      <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div class="clear"></div>
                  <div
                    class="submit-w3l"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div
                      style={{
                        padding: "10px",
                        width: "100px",
                        background: "#e8f0fe",
                        color: "black",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleLogin()}
                    >
                      Login
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
