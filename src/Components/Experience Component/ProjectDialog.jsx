import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "./ExperienceComponent.css";
import { Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
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

function ProjectDialog() {
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
        style={{ backdropFilter: "blur(1px)" }}
      >
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, fontWeight: "bold", fontSize: "1.4rem" }}
            id="customized-dialog-title"
          >
            More Insights (Project)
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
              marginRight: "1rem",
            }}
          >
            <CloseIcon style={{ color: "red" }} />
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
            Project-Oriented Frontend & Backend
          </Typography>

          <Typography
            variant="body1"
            sx={{ lineHeight: 1.6, mb: 2, fontSize: "1.2rem" }}
          >
            🌐 As a practical example of my work, I contributed to the
            development of a business portal where we onboard vehicles and focus
            on performance optimizations. Additionally, I worked on a client
            portal, with both projects involving significant frontend and
            backend improvements to ensure a seamless user experience.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              mb: 2,
              fontSize: "1.2rem",
            }}
          >
            📈 You can explore the User portal here:
            <a
              href="https://portal-dev.trakzeus.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              <span style={{ marginLeft: "0.4rem" }}>Trakzeus User Portal</span>
            </a>
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

export default ProjectDialog;
