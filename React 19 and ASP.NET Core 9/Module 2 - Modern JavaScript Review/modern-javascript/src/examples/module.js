export function exportedFunction(){
    console.log('Executing the exported function');
    hiddenFunction();
}

function hiddenFunction(){
    console.log('executing the hidden function');
}

export let globalConfigurations = {
    language: 'ENG',
    logged: false
}

export default function mainFunction(){
    console.log('Executing the main function');
}

