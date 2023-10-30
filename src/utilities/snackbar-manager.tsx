import { enqueueSnackbar} from "notistack";


export const SnackbarUtilities = {
    toast(msg: string, variant: "success" | "error" | 'info' | 'warning'){
        enqueueSnackbar(msg, { variant })
    },
    success(msg: string){
        this.toast(msg, "success")
    },
    error(msg: string){
        this.toast(msg, "error")
    },
    info(msg: string){
        this.toast(msg, 'info');
    },
    warning(msg: string){
        this.toast(msg, "warning")
    }
}