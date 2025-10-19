import {Info, TriangleAlert} from "lucide-react";

interface Props {
    type?: "normal" | "alert";
    text: string;
}

function Label({type = "alert", text}: Props) {
    return (
        <div data-slot="alert" role="alert"
             className={`relative flex items-center gap-3 w-full rounded-lg border px-4 py-2.5 text-sm ${type == "alert" ?
                 "bg-red-500/10 border-red-500/30 text-red-400" :
                 "bg-green-500/10 border-green-500/30 text-green-400"}`}>
            {type == "alert" ? <TriangleAlert size={20}/> : <Info/>}
            <div data-slot="alert-description"
                 className="text-muted-foreground text-sm">
                {text}
            </div>
        </div>
    );
}

export default Label;