import classes from "./MealSummary.module.css";

const MealSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You!!</h2>
            <p>choose your favorite meals from our delicious menu! we have a variety of food, and cannot wait for you to order them!</p>
            <p>All meals are cooked with our most expert chiefs and cooks, and are high quality products to make you enjoy your meal for the best price</p>
        </section>
    );
};

export default MealSummary;