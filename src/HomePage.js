import React from 'react';
import keycloak from './keycloak';

const HomePage = () => {
    const handleLogout = async () => {
        try {
          if (keycloak) {
            await keycloak.logout({
              redirectUri: 'http://localhost:3000/login',
            });
          } else {
            console.error('Keycloak instance is not initialized');
          }
        } catch (error) {
          console.error('Logout failed:', error);
        }
      };
    return (
        <div>
            Tài khoản của bạn đã được xác thực với keyclaok
            <div onClick={() => handleLogout()}>Đăng xuất </div>
        </div>
    );
};

export default HomePage;