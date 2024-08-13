<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Button } from "components/ui/button"
import SortingDirection from '@/types/SortingDirection';

type SortingAttribute = "name" | "duration"
const model = defineModel<[SortingAttribute, SortingDirection]>({ required: true })

function sortBy(primary: SortingAttribute) {
  if (model.value[0] == primary) {
    model.value = [primary, model.value[1] == "asc" ? "desc" : "asc"]
  }
  else {
    model.value = [primary, "asc"]
  }
}
</script>

<<template>
  <div class="w-full flex flex-row h-11 font-medium text-muted-foreground">
    <div class="shrink-0 w-12 shrink-0 h-full"></div>

    <div class="shrink-0 w-[1px] mx-2 h-full"></div>

    <div class="w-full h-full">
      <Button
        variant="ghost"
        class="my-1 p-1.5 text-base"
        @click="sortBy('name')"
      >
        <span>Name</span>
        <div class="h-full aspect-square ml-1">
          <Icon
            :icon="model[1] == 'asc' ? 'mdi:sort-alphabetical-ascending' : 'mdi:sort-alphabetical-descending'"
            class="w-full h-full"
            v-if="model[0] == 'name'"
          />

        </div>
      </Button>
    </div>

    <div class="mr-4 w-32 h-full text-right">
      <Button
        variant="ghost"
        class="my-1 p-1.5 text-base"
        @click="sortBy('duration')"
      >
        <span>Duration</span>
        <div class="h-full aspect-square ml-1">
          <Icon
            :icon="model[1] == 'asc' ? 'mdi:sort-clock-ascending-outline' : 'mdi:sort-clock-descending-outline'"
            class="w-full h-full"
            v-if="model[0] == 'duration'"
          />

        </div>
      </Button>
    </div>

    <div class="shrink-0 w-[1px] mx-2 h-full"></div>

    <div class="shrink-0 w-10 h-full"></div>

  </div>
</template>
