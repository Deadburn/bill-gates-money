import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [
            {
                id: 1,
                name: "Big Mac",
                img: "https://neal.fun/spend/images/big-mac.jpg",
                price: 2
            },
            {
                id: 2,
                name: "Flip Flops",
                img: "https://neal.fun/spend/images/flip-flops.jpg",
                price: 3
            },
            {
                id: 3,
                name: "Coca-Cola Pack",
                img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
                price: 5
            },
            {
                id: 4,
                name: "Movie Ticket",
                img: "https://neal.fun/spend/images/movie-ticket.jpg",
                price: 12
            },
            {
                id: 5,
                name: "Book",
                img: "https://neal.fun/spend/images/book.jpg",
                price: 15
            },
            {
                id: 6,
                name: "Lobster Dinner",
                img: "https://neal.fun/spend/images/lobster-dinner.jpg",
                price: 45
            },
        ],
        balance: 1000,
        basket: [],
        qty: 1,
    },
    reducers: {
        buyItem: (state, action) =>  {
            const findedBasket = state.basket.find((item) => item.name === action.payload.name)
            if(findedBasket) {
                findedBasket.qty += 1
            } else {
                state.basket.push(action.payload) 
            }
        },
        sellItem: (state, action) => {
            const findDeletedItem = state.basket.find((item) => item.name === action.payload.name)
            if(findDeletedItem && findDeletedItem.qty === 1) {
                const filteredBasket = state.basket.filter((item) => item.name !== findDeletedItem.name)
                state.basket = filteredBasket
            } else if(findDeletedItem && findDeletedItem.qty > 1) {
                findDeletedItem.qty -= 1
            }
        },
        incBalance: (state, action) => {
            state.balance += action.payload;
        },
        decBalance: (state, action) => {
            state.balance -= action.payload
        },

    }
})

export const {decBalance, incBalance, buyItem, sellItem} =  productSlice.actions
export default productSlice.reducer;