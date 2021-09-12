import React, { Component } from 'react';

import styles from './index.module.css';
import Modal from 'react-modal';
import classnames from 'classnames';

class ModalOverlay extends Component {
    componentDidMount() {
        Modal.setAppElement('body');
    }

    getModalClassName = () => {
        if (this.props.whithoutBox)
            return (styles.Modal);

        return (classnames(styles.Modal, styles.box));
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                className={this.getModalClassName()}
                overlayClassName={styles.Overlay}
                onRequestClose={this.props.onClose}>
                {this.props.children}
            </Modal>
        );
    }
}

export default ModalOverlay;