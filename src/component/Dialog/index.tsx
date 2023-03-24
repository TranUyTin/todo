import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";

const NotifyDialog = (props: any) => {
  const { onClose, info, title } = props;

  return (
    <Dialog
      title={title}
      onClose={() => onClose()}
      className="k-rounded-md k-overflow-hidden"
    >
      <p style={{ margin: "25px", textAlign: "center", fontWeight: "bold" }}>
        {info}
      </p>
      <DialogActionsBar>
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={() => onClose()}
        >
          Close
        </button>
      </DialogActionsBar>
    </Dialog>
  );
};

export default NotifyDialog;
