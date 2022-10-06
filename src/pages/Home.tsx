import Wrapper from "components/Wrapper";
import ItemList from "components/ItemList";
import FloatingMenu from "components/FloatingMenu";

function Home() {
    return (
        <Wrapper>
            <ItemList cols={3} />
            <FloatingMenu />
        </Wrapper>
    );
}

export default Home;
