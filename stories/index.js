import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from '../src/lib/components/card/card';
import MyHeader from '../src/lib/components/header/header';
import MyDescription from '../src/lib/components/description/description';

storiesOf('Card', module)
    .add('Empty card', () => <Card></Card>)
    .add('Card with header', () =>
        <Card>
            <MyHeader text={"header"} />
        </Card>
    )
    .add('Card with description', () =>
        <Card>
            <MyDescription text={"description"} />
        </Card>
    )
    .add('Card with header and description', () =>
        <Card>
            <MyHeader text={"header"} />
            <MyDescription text={"description"} />
        </Card>
    )