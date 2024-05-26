import * as AlertDialog from "@radix-ui/react-alert-dialog";
import classes from "./AlertX.module.css";

const AlertX = ({ open, setOpen, onConfirm }) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      {/* <AlertDialog.Trigger asChild>
      <button className={`${classes.Button} ${classes.violet}`}>
        Delete account
      </button>
    </AlertDialog.Trigger> */}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={classes.AlertDialogOverlay} />
        <AlertDialog.Content className={classes.AlertDialogContent}>
          <AlertDialog.Title className={classes.AlertDialogTitle}>
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className={classes.AlertDialogDescription}>
            This action cannot be undone. This will permanently delete this
            meetup.
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button className={`${classes.Button} ${classes.mauve}`}>
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className={`${classes.Button} ${classes.red}`}
                onClick={onConfirm}
              >
                Yes, delete
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertX;
