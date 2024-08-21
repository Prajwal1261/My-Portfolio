import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    backgroundColor: "#fefefe",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: "2rem",
  color: "#1E90FF",
  borderColor: "#1E90FF",

  "&:hover": {
    color: "#f5f5f5",
    borderColor: "#f5f5f5",
    backgroundColor: "transparent",
  },

  "&:active": {
    color: "#f5f5f5",
    borderColor: "#f5f5f5",
    backgroundColor: "transparent",
  },
}));

function ExperienceDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CustomButton variant="outlined" onClick={handleClickOpen}>
        More Info
      </CustomButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // style={{ marginRight: "30rem" }}
        style={{ backdropFilter: "blur(1px)" }}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, fontWeight: "bold", fontSize: "1.1rem" }}
            id="customized-dialog-title"
          >
            More Insights (Experience)
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
              marginRight: "1rem",
            }}
          >
            <CloseIcon sx={{ color: "red" }} />
          </IconButton>
        </Grid>
        <DialogContent dividers>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: (theme) => theme.palette.primary.main,
              mb: 2,
            }}
          >
            Frontend & Backend Development
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.6, mb: 2, fontSize: "1.2rem" }}
          >
            🚀 I have worked extensively with front-end frameworks, utilizing
            both class components and function-based components.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.6, mb: 2, fontSize: "1.2rem" }}
          >
            💡 Additionally, I have developed and optimized backend services,
            implementing and maintaining robust CRUD operations. This ensures
            efficient data management and seamless integration with frontend
            components.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              color: "#008080",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            "Delivering full-stack solutions with precision and performance."
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default ExperienceDialog;
