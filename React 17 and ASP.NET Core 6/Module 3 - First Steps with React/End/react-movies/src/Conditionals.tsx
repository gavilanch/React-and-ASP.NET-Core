export default function Conditionals() {
    const canSee = false;
    return (
        <>
            <h1>Conditionals Example</h1>
            {canSee ? <div>You are seeing the secret</div> :
                <span>You are not allowed to see</span>}
        </>
    );
}