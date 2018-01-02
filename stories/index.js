import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from '../src/lib/components/card/card';
import Header from '../src/lib/components/header/header';
import Description from '../src/lib/components/description/description';

import imageFile from './static/stress.jpg';

const image = {
    src: imageFile,
    alt: 'my image',
};

storiesOf('Card', module)
    .add('Empty card', () =>
        <Card></Card>
    )
    .add('Card with header', () =>
        <Card>
            <Header><b>This</b> is a styled header. In the header you can put regular HTML. For example "This" is inside &lt;b&gt;.</Header>
        </Card>
    )
    .add('Card with description', () =>
        <Card>
            <Description>This is a description, this can be styled with regular html.</Description>
        </Card>
    )
    .add('Card with header and description', () =>
        <Card>
            <Header><b>This</b> is a styled header. In the header you can put regular HTML. For example "This" is inside &lt;b&gt;.</Header>
            <Description>This is a description, this can be styled with regular html.</Description>
        </Card>
    )
    .add('Card with image, header and description', () =>
        <Card href="www.ne.se" image={image}>
            <Header>Vulkan</Header>
            <Description><b>Vulkan</b> är en plats där hett material från en planets inre, till exempel jordens ...</Description>
        </Card>
    )

    .add('Card with no access', () =>
        <Card href="www.ne.se" image={image} noAccess={true}>
            <Header>Vulkan</Header>
            <Description><b>Vulkan</b> är en plats där hett material från en planets inre, till exempel jordens ...</Description>
        </Card>
    )