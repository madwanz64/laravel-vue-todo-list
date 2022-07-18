import axios from "axios";
import { ref } from "vue";

export default function useItems() {
    const items = ref([]);

    const errors = ref('');

    const getItems = async() => {
        let response = await axios.get('/api/items');
        items.value = response.data.data;
    }

    const storeItem = async(data) => {
        await axios.post('/api/items/', data)
    }

    const updateItem = async(id, data) => {
        await axios.put('/api/items/' + id, data)
    }

    const destroyItem = async(id) => {
        await axios.delete('/api/items/' + id);
    }

    return {
        items,
        errors, 
        getItems,
        storeItem, 
        updateItem,
        destroyItem
    };
}