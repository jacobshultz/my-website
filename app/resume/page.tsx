import Return from "@/components/return";

export default function Resume() {
    return (
        <>
            <Return/>
            <h1 style={{
                animation: "boing 0.4s ease-in-out infinite alternate;", 
                textAlign: "center"
                }}>
                <a href="/jacobshultz.pdf" target="_blank">PDF DOWNLOAD</a>
            </h1>
        </>
    );
}