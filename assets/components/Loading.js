import * as React from 'react';
import {ActivityIndicator, Modal, Portal, Provider} from 'react-native-paper';
import {theme} from '../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StyleSheet} from 'react-native';

const Loading = (visibleObj = true) => {
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(visibleObj);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'transparent', padding: 20};

  return (
    <Modal
      style={styles.modal}
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}>
      <ActivityIndicator
        animating={true}
        color={theme.colors.primary}
        size={responsiveWidth(20)}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    zIndex: 100,
    position: 'absolute',
    elevation: 100,
  },
});

export default Loading;
