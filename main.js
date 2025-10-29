const avanca =document.querySelectorAll('.btn-proximo')
console.log(avanca)

avanca.forEach(button => {
buttton.addEventListener('click',function () {
const atual = documen.querySelector('.ativo')
const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

atual.ClassList.remove('ativo')
document.getElementById(proximoPasso).classList.add('ativo')
})
}) 