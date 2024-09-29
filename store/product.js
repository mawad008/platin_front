import axios from "axios";
export default {
    namespaced: true,
    state: {
        mainProduct: {},
        newPriceItem: {},
        user: {},
        pending: false,
      },
      mutations: {
        setProduct(state, product) {
            state.mainProduct = product;
          },  
        setNewItem(state, product) {
            state.newPriceItem = product;
          },
          setPending(state , pending){
            state.pending = pending;
          }  
      },
      actions: {
        async getProduct({ commit } , {id , locale}) {
            commit('setPending', true);
            let result = await axios.get(`${getUrl()}/products/${id}`, {
                headers: {
                    "Content-Language": `${locale}`,
                },
            });
            if (result.status == 200) {
            // mainProduct.value = result.data.data;
            commit('setProduct', result.data.data);
            commit('setNewItem', result.data.data?.variations[0]);
            // newPriceItem.value = result.data.data?.variations[0];
            commit('setPending', false);
          }
        },
      },

}
