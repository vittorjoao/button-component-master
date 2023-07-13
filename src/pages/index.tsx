import Head from "next/head";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <p className="title">Buttons</p>
        <div className="row-section">
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button />`}</p>
              <Button>Default</Button>
            </div>
            <div className="button-section">
              <p className="button-code">{`<Button variant="outline" />`}</p>
              <Button variant="outline" color="primary">
                Default
              </Button>
            </div>
            <div className="button-section">
              <p className="button-code">{`<Button variant="text" />`}</p>
              <Button variant="text" color="primary">
                Default
              </Button>
            </div>
            <div className="button-section">
              <p className="button-code">{`<Button disableShadow />`}</p>
              <Button color="primary" disableShadow>
                Default
              </Button>
            </div>
            <div className="button-section">
              <p className="button-code">{`<Button disabled />`}</p>
              <Button disabled>Default</Button>
            </div>
            <div className="button-section">
              <p className="button-code">{`<Button startIcon="account_circle" />`}</p>
              <Button color="primary" startIcon="account_circle">
                Default
              </Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-state">&:hover, &:focus</p>
              <Button active>Default</Button>
            </div>
            <div className="button-section">
              <p className="button-state">&:hover, &:focus</p>
              <Button variant="outline" color="primary" active>
                Default
              </Button>
            </div>
            <div className="button-section">
              <p className="button-state">&:hover, &:focus</p>
              <Button variant="text" color="primary" active>
                Default
              </Button>
            </div>
            <div style={{ height: "60px" }}></div>
            <div className="button-section">
              <p className="button-code">{`<Button variant="text" disabled />`}</p>
              <Button variant="text" disabled>
                Default
              </Button>
            </div>
            <div className="button-section">
              <p className="button-code">{`<Button endIcon="home" />`}</p>
              <Button color="primary" endIcon="home">
                Default
              </Button>
            </div>
          </div>
        </div>
        <div className="row-section">
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button size="sm" />`}</p>
              <Button color="primary" size="sm">
                Default
              </Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button size="md" />`}</p>
              <Button color="primary" size="md">
                Default
              </Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button size="lg" />`}</p>
              <Button color="primary">Default</Button>
            </div>
          </div>
        </div>
        <div className="row-section">
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button />`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button color="primary" />`}</p>
              <Button color="primary">Primary</Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button color="secondary" />`}</p>
              <Button color="secondary">Secondary</Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button color="danger" />`}</p>
              <Button color="danger" variant="outline">
                Danger
              </Button>
            </div>
          </div>
        </div>
        <div className="row-section">
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button />`}</p>
              <Button active>Default</Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button color="primary" />`}</p>
              <Button color="primary" active>
                Primary
              </Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button color="secondary" />`}</p>
              <Button color="secondary" active>
                Secondary
              </Button>
            </div>
          </div>
          <div className="col-section">
            <div className="button-section">
              <p className="button-code">{`<Button color="danger" />`}</p>
              <Button color="danger" active>
                Danger
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
