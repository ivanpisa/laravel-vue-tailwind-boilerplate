<template>
    <div>
        <h1>{{ this.example }}</h1>
    </div>
</template>

<script>
export default {
    setup() {
        const example = 'Example';

        return {
            example,
        };
    },
};
</script>

<style lang="scss" scoped></style>
