import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NetlifyAuthenticator } from 'netlify-cms-lib-auth';
import { AuthenticationPage, Icon } from 'netlify-cms-ui-default';

const LoginButtonIcon = styled(Icon)`
  margin-right: 18px;
`;

export default class AppwriteAuthenticationPage extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    inProgress: PropTypes.bool,
    base_url: PropTypes.string,
    siteId: PropTypes.string,
    authEndpoint: PropTypes.string,
    config: PropTypes.object.isRequired,
    clearHash: PropTypes.func,
    t: PropTypes.func.isRequired,
  };

  state = {};

  handleLogin = e => {
    e.preventDefault();
    console.log(e);
    alert('TODO: Check if API key, endpoint, ProjectID are all correct');
  };

  renderLoginButton = () => {
    const { inProgress, t } = this.props;
    return inProgress ? (
      t('auth.loggingIn')
    ) : (
      <React.Fragment>
        <LoginButtonIcon type="github" />
        {t('auth.loginWithAppwrite')}
      </React.Fragment>
    );
  };

  getAuthenticationPageRenderArgs() {
    return {
      renderButtonContent: this.renderLoginButton,
    };
  }

  render() {
    const { inProgress, config, t } = this.props;
    const { loginError } = this.state;

    return (
      <AuthenticationPage
        onLogin={this.handleLogin}
        loginDisabled={inProgress}
        loginErrorMessage={loginError}
        logoUrl={config.logo_url}
        siteUrl={config.site_url}
        {...this.getAuthenticationPageRenderArgs()}
        t={t}
      />
    );
  }
}
