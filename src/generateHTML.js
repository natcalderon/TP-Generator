
const index = require('../index');
let finalArray = [];


function basicHTML() { 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css" integrity="sha512-RntatPOhEcQEA81gC/esYoCkGkL7AYV7TeTPoU+R9zE44/yWxVvLIBfBSaMu78rhoDd73ZeRHXRJN5+aPEK53Q==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/wfs8ufu.css">
        <link rel="stylesheet" href="https://use.typekit.net/ffz2ozu.css">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
    <header>
     <h2 class='text-white text-center text-4xl p-3'>My Team</h2>
    </header>
        <main id='employee-profiles' class='grid grid-cols-1 md:grid-cols-3 main'>
        ${finalArray.join('')}
        </main>
    </body>
    </html>`
};

function generateHTML (arr) {
    arr.forEach((employee) => {
        switch(employee.getRole()){
            case 'Manager':
                managerCard(employee);
                break;
            case 'Engineer':
                engineerCard(employee);
                break;
            default:
                internCard(employee);
        }
    })
    return basicHTML();
}


//manager card
function managerCard(employee){
    let managerDiv = '';
    if (employee !== ""){
        managerDiv = `

        <div class='card flex flex-col w-1/3'>
            <div class='gradient-border text-center p-1.5 mb-1 flex flex-col'>
                <div class="content-wrapper text-base">

                    <div class="card-header">
                        <i class="fas fa-user-tie inline"></i>
                        <h4>${employee.name}</h4>
                        <h5 class='inline'>Manager</h5>
                        <hr>
                    </div>
                    
                 <p class='text-base mx-8'>Id Number: ${employee.id}</p>
                 <p class='text-base mx-8'>Email: <a class='underline hover:text-white' href="mailto: ${employee.email}">${employee.email}</a></p>
                 <p class='text-base mx-8'>Office Number: ${employee.officeNumber}</p>
                </div>  
            </div>
         </div>`
    }
    //console.log(managerDiv);
    finalArray.push(managerDiv);
}

//engineer card
function engineerCard(employee){
    let engineerDiv = '';
    if (employee !== "") {
        engineerDiv = `

        <div class='card flex flex-col w-1/3'>
            <div class='gradient-border text-center p-1.5 mb-1 flex flex-col'>
                <div class="content-wrapper text-base">

                    <div class="card-header">
                        <i class="fas fa-laptop-code"></i>
                        <h4>${employee.name}</h4>
                        <h5 class='inline'>Engineer</h5>
                        <hr>
                    </div>
                <p class='text-base mx-8'>Id Number: ${employee.id}</p>
                <p class='text-base mx-8'>Email: <a class='underline hover:text-white' href="mailto: ${employee.email}">${employee.email}</a></p>
                <p class='text-base mx-8'>GitHub: <a class='underline hover:text-white' target='_blank' href='https://www.github.com/${employee.github}'>${employee.github}</a></p>
                </div>
            </div>
        </div>`
    }
    //console.log(engineerDiv);
    finalArray.push(engineerDiv);
}

//intern card
function internCard(employee){
    let internDiv = '';
    if (employee !== "") {
    internDiv = `

    <div class='card flex flex-col w-1/3'>
            <div class='gradient-border text-center p-1.5 mb-1 flex flex-col'>
                <div class="content-wrapper text-base">

                    <div class="card-header">
                        <i class="fas fa-user-graduate"></i>
                        <h4>${employee.name}</h4>
                        <h5 class='inline'>Intern</h5>
                        <hr>
                    </div>
                <p class='text-base mx-8'>Id Number: ${employee.id}</p>
                <p class='text-base mx-8'>Email: <a class='underline hover:text-pink' href="mailto: ${employee.email}">${employee.email}</a></p>
                <p class='text-base mx-8'>School: ${employee.school}</p>
                </div>
            </div>
        </div>`
    }
    //console.log(internDiv);
    finalArray.push(internDiv);
}

module.exports = generateHTML;