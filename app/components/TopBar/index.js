/**
*
* TopBar
*
*/

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';
import ArrowDropDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import homeLogo from 'components/Icons/logo.png';
import messages from './messages';
import styles from './styles';
import { TopBarSection,
  MenuLeftSection,
  MenuRightSection,
  ProfileSection,
  DataSection,
  UserName,
  UserRole,
  AvatarSection,
  ArrowSection,
  SpacingDiv,
  SesolarIconSectionSelected,
  SesolarIconSection,
  MenuOptionSelected,
  MenuOption,
  MenuOptionsSection,
  MenuOptions,
  ImgLogo,
} from './styledComponents';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  whiteColor = '#fff';
  searcherContentColor = '#a6e5c1';
  userImageUrl = 'https://icon-icons.com/icons2/11/PNG/256/child_person_people_guy_1721.png';
  handleLogout = () => {
    localStorage.removeItem('user');
    browserHistory.replace('/');
  }

  render() {
    const { selectedItem } = this.props;
    const userName = 'César López';
    const userRole = 'Administrador';
    const Sesolar = selectedItem === messages.menuOptions.sesolar ? SesolarIconSectionSelected : SesolarIconSection;
    const ClientsOption = selectedItem === messages.menuOptions.clients ? MenuOptionSelected : MenuOption;
    const BrandsOption = selectedItem === messages.menuOptions.brands ? MenuOptionSelected : MenuOption;
    const ProductsOption = selectedItem === messages.menuOptions.products ? MenuOptionSelected : MenuOption;
    const ProyectsOption = selectedItem === messages.menuOptions.proyects ? MenuOptionSelected : MenuOption;
    const ProspeccionOption = selectedItem === messages.menuOptions.prospeccion ? MenuOptionSelected : MenuOption;
    return (
      <div>
        <TopBarSection>
          <MenuLeftSection>
            <Sesolar onClick={() => browserHistory.push('/home')}>
              <ImgLogo src={homeLogo} />
            </Sesolar>
            <MenuOptions>
              <MenuOptionsSection>
                <ClientsOption
                  onClick={() => browserHistory.push('/clientes')}
                >
                  <a>{messages.menuOptions.clients}</a>
                </ClientsOption>
                <BrandsOption
                  onClick={() => browserHistory.push('/marcas')}
                >
                  <a>{messages.menuOptions.brands}</a>
                </BrandsOption>
                <ProductsOption
                  onClick={() => browserHistory.push('/productos')}
                >
                  <a>{messages.menuOptions.products}</a>
                </ProductsOption>
                <ProspeccionOption
                  onClick={() => browserHistory.push('/prospeccion')}
                >
                  <a>{messages.menuOptions.prospeccion}</a>
                </ProspeccionOption>
                <ProyectsOption
                  onClick={() => browserHistory.push('/proyectos')}
                >
                  <a>{messages.menuOptions.proyects}</a>
                </ProyectsOption>
              </MenuOptionsSection>
            </MenuOptions>
          </MenuLeftSection>
          <MenuRightSection>
            <ProfileSection>
              <DataSection>
                <UserName>
                  {userName}
                </UserName>
                <UserRole>
                  {userRole}
                </UserRole>
              </DataSection>
              <AvatarSection>
                <Avatar
                  style={styles.image}
                  src={this.userImageUrl}
                />
              </AvatarSection>
              <ArrowSection>
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <ArrowDropDownIcon
                        color={this.whiteColor}
                      />
                    </IconButton>}
                  targetOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                  <MenuItem
                    value="1"
                    primaryText="Cerrar sesión"
                    onClick={this.handleLogout}
                  />
                </IconMenu>
              </ArrowSection>
            </ProfileSection>
          </MenuRightSection>
        </TopBarSection>
        <SpacingDiv />
      </div>
    );
  }
}

TopBar.propTypes = {
  selectedItem: PropTypes.string,
};

export default TopBar;
