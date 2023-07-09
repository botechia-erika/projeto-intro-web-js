/* produtos loja */
const productsList = [{
        id: 0,
        marca: "360 DEGREES",
        material: "Aço inoxidável",
        cor: "Azul",
        tags: [],
        capacidade: 1000,
        mlTermo: "mlTipoC",
        nome: "Degrees 11",
        imagen: "img/garrafa1.PNG",
        preco: 239
    },
    {
        id: 1,
        marca: "360 DEGREES",
        material: "Aço inoxidável",
        cor: "Verde",
        tags: [],
        capacidade: 550,
        mlTermo: "mlTipoB",
        nome: "Degrees 550ml",
        imagen: "img/garrafa2.PNG",
        preco: 142.90
    },
    {
        id: 2,
        marca: "360º Degrees",
        tags: [],
        capacidade: 750,
        mlTermo: "mlTipoB",
        cor: "Azul",
        nome: "cop: 360 Degrees",
        material: "Aço inoxidável",
        imagen: "img/garrafa3.PNG",
        preco: 174.90
    },
    {
        id: 3,
        marca: "360 DEGREES",
        material: "Aço inoxidável 18 / 8",
        cor: "Laranja",
        tags: [],
        capacidade: 750,
        mlTermo: "mlTipoB",
        nome: " Degrees 750ml",
        imagen: "img/garrafa4.PNG",
        preco: 189.99
    },
    {
        id: 4,
        marca: "Contigo",
        material: "Plástico",
        cor: "preto",
        tags: [],
        capacidade: 591,
        mlTermo: "mlTipoB",
        nome: "Contigomatterhornmatter Black",
        imagen: "img/garrafa5.PNG",
        preco: 88.9
    },
    {
        id: 5,
        marca: "Ekological",
        material: "Aço inoxidável",
        cor: "Cinza claro",
        tags: [],
        capacidade: 500,
        mlTermo: "mlTipoA",
        nome: "inox parede Dupla prata ",
        imagen: "img/garrafa6.PNG",
        preco: 55.95
    },
    {
        id: 6,
        marca: "Tramontina",
        material: "Polipropeno + Vidro",
        cor: "Preto",
        tags: [],
        capacidade: 1000,
        mlTermo: "mlTipoC",
        nome: "Tramontina Exata",
        imagen: "img/garrafa7.PNG",
        preco: 45.90
    },
    {
        id: 7,
        marca: "Stanley",
        material: "Aço inoxidável",
        cor: "hammertone - green",
        tags: [],
        capacidade: 470,
        mlTermo: "mlTipoA",
        nome: "Copo térmico de cerveja ",
        imagen: "img/garrafa9.PNG",
        preco: 163.22
    },
    {
        id: 8,
        marca: "Mix",
        material: "Plástico",
        cor: "preta",
        tags: [],
        capacidade: "1000ml",
        mlTermo: "mlTipoC",
        nome: "Wood Fashio",
        imagen: "img/garrafa10.PNG",
        preco: 97.90
    },
    {
        id: 9,
        marca: "invicta",
        material: "Aço inoxidável",
        cor: "Prata",
        tags: [],
        capacidade: 1800,
        nome: "Air pot inox",
        imagen: "img/garrafa12.PNG",
        preco: 122.59
    },
    {
        id: 10,
        marca: "CamelBak",
        material: "Térmico",
        cor: "Preto",
        tags: [],
        capacidade: 750,
        mlTermo: "mlTipoB",
        nome: "Garrafa",
        imagen: "img/garrafa13.PNG",
        preco: 260.06
    },
    {
        id: 11,
        marca: "COnTiGO",
        material: "Aço inoxidável",
        cor: "Rosa",
        tags: [],
        capacidade: 384,
        mlTermo: "mlTipoA",
        nome: "SQUEEZE inFAnTiL TÉRMiCO AUTOSpOUT inOX",
        imagen: "img/garrafa14.PNG",
        preco: 135.20
    },
    {
        id: 12,
        marca: "Stanley",
        material: "polipropileno",
        cor: "preto",
        tags: [],
        capacidade: 750,
        mlTermo: "mlTipoB",
        nome: "Classic Hydration",
        imagen: "img/garrafa15.PNG",
        preco: 252.08
    },
    {
        id: 13,
        marca: "Stanley",
        material: "Aço inoxidável",
        cor: "polar",
        tags: [],
        capacidade: "750ml",
        mlTermo: "mlTipoB",
        nome: "Stanley QUiCKFLip",
        imagen: "img/garrafa16.PNG",
        preco: 215
    },
    {
        id: 14,
        marca: "FRATELLi",
        material: "aço inoxidável",
        cor: "Cinza",
        tags: [],
        capacidade: 450,
        mlTermo: "mlTipoA",
        nome: "Garrafa Térmica Cinza",
        imagen: "img/garrafa1.PNG",
        preco: 51
    },
    {
        id: 15,
        marca: "TERMOpRO",
        material: "Aço inoxidável",
        cor: "Branco",
        tags: [],
        capacidade: 500,
        mlTermo: "mlTipoA",
        nome: "Squeeze Térmico",
        imagen: "img/garrafa19.PNG",
        preco: 59
    },
    {
        id: 16,
        marca: "Contigo",
        material: "Aço inoxidável",
        cor: "Verde",
        tags: [],
        capacidade: "591ml",
        mlTermo: "mlTipoB",
        nome: "inox Autospout",
        imagen: "img/garrafa20.PNG",
        preco: 148
    },
    {
        id: 17,
        marca: "COnTiGO",
        material: "Aço inoxidável",
        cor: "Rosa",
        tags: [],
        capacidade: 710,
        nome: "inox AUTOSEAL",
        imagen: "img/garrafa11.PNG",
        preco: 142.03
    },
    {
        id: 18,
        marca: "Mimo Style",
        material: "aço inoxidável",
        cor: "preto",
        tags: [],
        capacidade: 350,
        mlTermo: "mlTipoA",
        nome: "Garrafa Térmica Black",
        imagen: "img/garrafa17.PNG",
        preco: 82
    },
    {
        id: 19,
        marca: "COnTiGO",
        material: "Aço inoxidável",
        cor: "Rosa",
        tags: [],
        capacidade: 384,
        mlTermo: "mlTipoA",
        nome: "SQUEEZE inFAnTiL TÉRMiCO AUTOSpOUT inOX",
        imagen: "img/garrafa14.PNG",
        preco: 135.20
    }
]

/* carrito e derivados*/
const carrito = []
const comprasHTML = document.getElementById('compras')
const idContenedor = document.getElementById('listaGarrafas')


/*adiciona 1 item ou 1 novo produto*/
const addItemCart = (item) => {
    if (carrito.some((termo) => termo.id == item.id)) {
        const index = carrito.findIndex((termo) => termo.id == item.id)
        carrito[index].quantidade++
            console.log(carrito[index].quantidade)
    } else {
        carrito.push({...item, quantidade: 1 })
    }
}

const restItemCart = (item) => {
    if (carrito.some((termo) => termo.id == item.id)) {
        const index = carrito.findIndex((termo) => termo.id == item.id)
        carrito[index].quantidade--
            console.log(carrito[index].quantidade)
    } else {
        carrito.push({...item, quantidade: 0 })
    }
}



const renderizarCarrito = (listaCarrito) => {

    comprasHTML.innerHTML = ""
    console.log(listaCarrito)
    listaCarrito.forEach(produto => {
        comprasHTML.innerHTML += `
	<div class="container_cart_user">
	<h2>${produto.nome.toUpperCase()}</h2>
	<div>
	<button class="btn-substract-item-cart" id="substract-item-cart-${produto.id}">-</button>
	<button class="btn-plus-item-cart" id="add-item-cart-${produto.id}">+</button>
	</div>
	<p>${produto.quantidade}</p>
 <p> ${produto.preco}</p>
   <div>

  </div>
	`
    })
    const btnPlusItemCart = document.getElementsByClassName('btn-plus-item-cart')
    for (const btn of btnPlusItemCart) {
        btn.addEventListener('click', (event) => {
            addItemCart(productsList.find((termo) => Number(event.target.id.split("-").pop() == termo.id)))
            renderizarCarrito(carrito)
        })
    }
    const btnLessList = document.getElementsByClassName("btn-substract-item-cart")
    for (const btnLess of btnLessList) {
        btnLess.addEventListener('click', (event) => {
            restItemCart(productsList.find((termo) => Number(event.target.id.split("-").pop() == termo.id)))
            renderizarCarrito(carrito)
        })
    }
}
const mostrarTermos = (termosCatalogo) => {
    idContenedor.innerHTML = ""
    if (termosCatalogo.length > 1) {
        termosCatalogo.forEach(termo => {

            idContenedor.innerHTML += `

<article>
			<h2 class="entrada-blog">${termo.nome.toUpperCase()}</h2>
			<img src="${termo.imagen}" alt="termo ${termo.id}">

<ul>
<li><strong>Referencia: </strong>#0${termo.id}</li>
<li><strong>Material: </strong>${termo.material.toUpperCase()}</>

<li>
<strong>Cor: </strong>${termo.cor.toUpperCase()}</li>

tags: [] ,<li><strong>
Capacidade: </strong>${termo.capacidade}ml</li>

<li><strong>R$ ${termo.preco}</strong></li>


</ul>

  <button class="btn-add" id="btn-add-${termo.id}">Agregar em Carrinho</button>

		</article>
`
        })
    } else {
        idContenedor.innerHTML = `<h2>PRODUTO NAO ENCONTRADO!</h2>
    <a href='../'>Voltar a  Busca</a>
    `
    }
    /*FOR EACH TERMINA ANTES*/

    const btnAddList = document.getElementsByClassName('btn-add')
    const btnLessList = document.getElementsByClassName('btn-substract-item-cart')
    for (const btnAdd of btnAddList) {
        /*ok*/
        btnAdd.addEventListener('click', (event) => {
            addItemCart(productsList.find((termo) => Number(event.target.id.split("-").pop() == termo.id)))
            renderizarCarrito(carrito)
        })
    }
}

// ADD PARA AUTOMATIZAR REACT


mostrarTermos(productsList)

const btnSearch = document.getElementById('searchData')
const inputHTML = document.getElementById('inputSearch')
const mlHTML = document.getElementById("mlTermo")


btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputHTML.value == "") {
        alert("Preencha com MARCA ou COR desejada BUSQUE SEU FAVORITO")
    } else {
        mostrarTermos(productsList.filter(
            (termo) => {
                return (
                    termo.marca.toUpperCase().includes(inputHTML.value.toUpperCase()) ||
                    termo.cor.toUpperCase().includes(inputHTML.value.toUpperCase())
                )
            }
        ))
    }
})