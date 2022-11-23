import React from 'react'

export interface IModalProps {
  title?: string;
  open?: boolean;
  onClickClose?: () => void;
  showFooter?: boolean;
  showHeader?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  children?: React.ReactNode;
}

const Modal = (props: IModalProps) => {
  const { title, open, onClickClose, showFooter, showHeader, onCancel, onOk, okText, cancelText, children } = props;

  return (open &&
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClickClose}>
      </div>
      <div className="min-height-100vh w-full max-w-4xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {showHeader ? (
            <>
              <button type="button" onClick={onClickClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="crypto-modal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  {title}
                </h3>
              </div>
            </>
          ) : (
            <button type="button" onClick={onClickClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          )}
          <div className="py-6 px-6 lg:px-8">
            {children}
          </div>
          {showFooter && (
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={onCancel}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {okText}
              </button>
              <button
                type="button"
                onClick={onOk}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                {cancelText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

Modal.defaultProps = {
  title: 'Modal',
  open: false,
  onClickClose: () => { },
  showFooter: false,
  showHeader: false,
  onCancel: () => { },
  onOk: () => { },
  okText: 'Ok',
  cancelText: 'Cancel',
  children: null,
};

export default Modal;