<template>
  <CChartDoughnut
    :datasets="defaultDatasets"
    :labels="['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']"
  />
</template>

<script>
import { CChartDoughnut } from '@coreui/coreui-chartjs/vue'

export default {
  name: 'CChartDoughnutExample',
  components: { CChartDoughnut },
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }
  }
}
</script>
