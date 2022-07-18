<template>
    <h2 class="text-center text-uppercase">ToDo List</h2>
    <div class="d-flex">
        <div class="mx-auto">
            <template v-for="item in items" :key="item.id">
                <div class="card mb-2" style="max-width:350px">
                    <div class="card-body d-flex align-items-center">
                        <div class="me-auto">
                            {{ item.title }}
                        </div>
                        <div class="ms-3 text-nowrap">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="true" id="flexCheckChecked"
                                    @change="checkItem(item.id, item.is_completed)" v-if="item.is_completed" checked>
                                <input class="form-check-input" type="checkbox" value="true" id="flexCheckChecked"
                                    @change="checkItem(item.id, item.is_completed)" v-if="item.is_completed == false">
                                <a href="" @click.prevent="deleteItem(item.id)">
                                    <font-awesome-icon icon="fa-solid fa-trash-can" fixed-width style="color: red;" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Tambahkan item baru" v-model="form.title">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="saveItem()">&plus;</button>
            </div>
        </div>
    </div>
</template>

<script>
import useItems from "../composables/items";
import { reactive, onMounted } from "vue";

export default {
    setup() {
        const { items, getItems, storeItem, updateItem, destroyItem } = useItems();

        onMounted(getItems)

        const form = reactive({
            'title' : ''
        })

        const saveItem = async() => {
            await storeItem({...form});
            await getItems();
            form.title = '';
        }

        const deleteItem = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }

            await destroyItem(id);
            await getItems();
        }

        const checkItem = async (id, is_completed) => {
            let data = {
                "completed": "" + !is_completed
            }
            await updateItem(id, data);
        }

        return {
            form,
            items,
            saveItem, 
            checkItem,
            deleteItem
        }
    }
}


</script>