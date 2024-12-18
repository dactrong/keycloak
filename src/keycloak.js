import Keycloak from "keycloak-js";

// Tạo một instance của Keycloak
const keycloak = new Keycloak({
  url: 'http://192.168.100.2:1411',
  realm: 'BZC',
  clientId: 'tms-service'
});

export default keycloak;
